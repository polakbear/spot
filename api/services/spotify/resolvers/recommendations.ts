import SpotifyWebApi from 'spotify-web-api-node';
import {
  QueryRecommendationsArgs,
  RecommendationsResult,
  Resolvers,
} from '../types';
import { fetchToken } from '../../../helpers/token';
import _ from 'lodash';

interface TrackSpotify {
  id: string;
  name: string;
}

export const recommendations: Resolvers['Query']['recommendations'] = (
  parent: any,
  args: QueryRecommendationsArgs,
) => {
  const token = fetchToken();
  const spot = new SpotifyWebApi();
  spot.setAccessToken(token);

  const audioOptions = {
    seed_artists: args.seedArtists,
    seed_genres: args.seedGenres,
    seed_tracks: args.seedTracks,
  };

  _.forEach(args.audioFeatures, function (value, key) {
    // @ts-ignore
    audioOptions[key] = value;
  });

  return spot.getRecommendations(audioOptions).then((resp) => {
    const res: RecommendationsResult = {
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
};
