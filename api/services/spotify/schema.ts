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

  type RecommendationsConnection {
    tracks: [Track]
  }

  type SongsConnection {
    tracks: [Track]
  }

  type ArtistsConnection {
    artists: [Artist]
  }

  type Genre {
    name: String
  }

  type GenresConnection {
    genres: [Genre]
  }
  input AudioFeatures {
    id: String

    min_acousticness: Int
    max_acousticness: Int
    min_danceability: Int
    max_danceability: Int
    min_energy: Int
    max_energy: Int
    min_instrumentalness: Int
    max_instrumentalness: Int
    min_popularity: Int
    max_popularity: Int
    min_liveness: Int
    max_liveness: Int
    min_loudness: Int
    max_loudness: Int
    min_speechiness: Int
    max__speechiness: Int
    min_valence: Int
    max_valence: Int

    analysis_url: String
    duration_ms: String

    key: String
    mode: String
    tempo: String
  }

  extend type Query {
    recommendations(
      seedTracks: [String]!
      seedGenres: [String]!
      seedArtists: [String]!
      audioFeatures: AudioFeatures
    ): RecommendationsConnection
    songs(searchString: String!): SongsConnection
    artists(searchString: String!): ArtistsConnection
    genres(searchString: String!): GenresConnection
  }
`;
