import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type Track {
    id: String
    album(full: Int): Album
    artists(full: Int, throttle: Int): [Artist]
    available_markets: [String]
    disc_number: Int
    duration_ms: Int
    explicit: Boolean
    href: String
    name: String
    popularity: Int
    preview_url: String
    track_number: Int
    type: String
    uri: String
  }

  type Artist {
    id: String
    href: String
    name: String
    type: String
    uri: String
  }

  type Album {
    id: String
    artists: [Artist]
    available_markets: [String]
    href: String
    label: String
    name: String
  }

  type Image {
    height: Int
    url: String
    width: Int
  }

  type RecommendationsResult {
    tracks: [Track]
  }

  type SongsResult {
    tracks: [Track]
  }

  type ArtistsResult {
    artists: [Artist]
  }

  type Genre {
    name: String
  }

  type GenresResult {
    genres: [Genre]
  }
  input AudioFeatures {
    id: String

    min_acousticness: Float
    max_acousticness: Float
    min_danceability: Float
    max_danceability: Float
    min_energy: Float
    max_energy: Float
    min_instrumentalness: Float
    max_instrumentalness: Float
    min_popularity: Int
    max_popularity: Int
    min_liveness: Float
    max_liveness: Float
    min_loudness: Float
    max_loudness: Float
    min_speechiness: Float
    max__speechiness: Float
    min_valence: Float
    max_valence: Float

    analysis_url: String
    duration_ms: Int

    key: Int
    mode: Int
    tempo: Int
  }

  extend type Query {
    recommendations(
      seedTracks: [String]!
      seedGenres: [String]!
      seedArtists: [String]!
      audioFeatures: AudioFeatures
    ): RecommendationsResult
    songs(searchString: String!): SongsResult
    artists(searchString: String!): ArtistsResult
    genres(searchString: String!): GenresResult
  }
`;
