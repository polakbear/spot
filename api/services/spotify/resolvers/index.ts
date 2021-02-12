import { recommendations } from "./recommendations";
import { Resolvers } from "../types";

export const resolvers: Resolvers = {
  Query: {
    recommendations,
  },
};
