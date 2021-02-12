import { Artist, ArtistsResult, QueryArtistsArgs, Resolvers } from '../types';
import SpotifyWebApi from 'spotify-web-api-node';
import { fetchToken } from '../../../helpers/token';

export const artists: Resolvers['Query']['artists'] = (
  parent: any,
  args: QueryArtistsArgs,
) => {
  const token = fetchToken();
  const spot = new SpotifyWebApi();
  spot.setAccessToken(token);

  return spot.searchArtists(args.searchString).then((resp) => {
    console.log(resp.body.artists.items[0]);
    const res: ArtistsResult = {
      artists: resp.body.artists.items.map((artist) => {
        return {
          id: artist.id,
          name: artist.name,
          images: artist.images,
        } as Artist;
      }),
    };
    return res;
  });
};
