import SpotifyWebApi from 'spotify-web-api-node';
import {
  QueryRecommendationsArgs,
  RecommendationsConnection,
  Resolvers,
} from '../types';
import fetch from 'node-fetch';
import { config } from '../../../config/config';
import { JsonDB } from 'node-json-db';
import { Config } from 'node-json-db/dist/lib/JsonDBConfig';
import _ from 'lodash';

interface TrackSpotify {
  id: string;
  name: string;
}

const db = new JsonDB(new Config('tokendb', true, false, '/'));

export const recommendations: Resolvers['Query']['recommendations'] = (
  parent: any,
  args: QueryRecommendationsArgs,
) => {
  //@todo: extract token
  const token = db.getData('token');
  if (!token) {
    fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Basic ${Buffer.from(
          `${config.clientId}:${config.clientSecret}`,
        ).toString('base64')}`,
      },
      body: 'grant_type=client_credentials',
    })
      .then((resp) => resp.text())
      .then((resp) => {
        const response = JSON.parse(resp);
        db.push('token', response.access_token);
        console.log('pushed to db ' + response.access_token);
      });
  }

  const spot = new SpotifyWebApi();
  spot.setAccessToken(db.getData('token'));

  const audioOptions = {
    seed_artists: args.seedArtists,
    seed_genres: args.seedGenres,
    seed_tracks: args.seedTracks,
  };

  _.forEach(args.audioFeatures, function (value, key) {
    // @ts-ignore
    audioOptions[key] = value;
  });

  console.log(audioOptions);

  const result = spot.getRecommendations(audioOptions).then((resp) => {
    const res: RecommendationsConnection = {
      tracks: resp.body.tracks.map((track) => {
        return {
          id: track.id,
          name: track.name,
          artists: track.artists,
          // album: track.album,
        } as TrackSpotify;
      }),
    };
    return res;
  });

  return result;
};
