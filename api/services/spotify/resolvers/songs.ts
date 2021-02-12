import { QueryArtistsArgs, Resolvers, SongsResult, Track } from '../types';
import SpotifyWebApi from 'spotify-web-api-node';
import { fetchToken } from '../../../helpers/token';

export const songs: Resolvers['Query']['songs'] = (
  parent: any,
  args: QueryArtistsArgs,
) => {
  const token = fetchToken();
  const spot = new SpotifyWebApi();
  spot.setAccessToken(token);

  return spot.searchTracks(args.searchString).then((resp) => {
    const res: SongsResult = {
      tracks: resp.body.tracks.items.map((track) => {
        return {
          id: track.id,
          name: track.name,
          artists: track.artists,
          album: track.album,
        } as Track;
      }),
    };
    return res;
  });
};
