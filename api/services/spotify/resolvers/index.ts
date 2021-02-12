import { recommendations } from './recommendations';
import { Resolvers } from '../types';
import { genres } from './genres';

export const resolvers: Resolvers = {
  Query: {
    recommendations,
    genres,
  },
};
