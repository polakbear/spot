import { Genre, GenresResult, Resolvers } from '../types';
import SpotifyWebApi from 'spotify-web-api-node';
import { fetchToken } from '../../../helpers/token';

export const genres: Resolvers['Query']['genres'] = () => {
  const token = fetchToken();
  const spot = new SpotifyWebApi();
  spot.setAccessToken(token);

  return spot.getAvailableGenreSeeds().then((resp) => {
    const res: GenresResult = {
      genres: resp.body.genres.map((genre: string) => {
        return {
          name: genre,
        } as Genre;
      }),
    };
    return res;
  });
};
