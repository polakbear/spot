import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Album = {
  __typename?: 'Album';
  artists?: Maybe<Array<Maybe<Artist>>>;
  available_markets?: Maybe<Array<Maybe<Scalars['String']>>>;
  href?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type Artist = {
  __typename?: 'Artist';
  href?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  images?: Maybe<Array<Maybe<Image>>>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  uri?: Maybe<Scalars['String']>;
};

export type ArtistsResult = {
  __typename?: 'ArtistsResult';
  artists?: Maybe<Array<Maybe<Artist>>>;
};

export type Genre = {
  __typename?: 'Genre';
  name?: Maybe<Scalars['String']>;
};

export type GenresResult = {
  __typename?: 'GenresResult';
  genres?: Maybe<Array<Maybe<Genre>>>;
};

export type Image = {
  __typename?: 'Image';
  height?: Maybe<Scalars['Int']>;
  url?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
};

export type Query = {
  __typename?: 'Query';
  _service: _Service;
  artists?: Maybe<ArtistsResult>;
  genres?: Maybe<GenresResult>;
  recommendations?: Maybe<RecommendationsResult>;
  songs?: Maybe<SongsResult>;
};


export type QueryArtistsArgs = {
  searchString: Scalars['String'];
};


export type QueryRecommendationsArgs = {
  audioFeatures?: Maybe<AudioFeatures>;
  seedArtists: Array<Maybe<Scalars['String']>>;
  seedGenres: Array<Maybe<Scalars['String']>>;
  seedTracks: Array<Maybe<Scalars['String']>>;
};


export type QuerySongsArgs = {
  searchString: Scalars['String'];
};

export type RecommendationsResult = {
  __typename?: 'RecommendationsResult';
  tracks?: Maybe<Array<Maybe<Track>>>;
};

export type SongsResult = {
  __typename?: 'SongsResult';
  tracks?: Maybe<Array<Maybe<Track>>>;
};

export type Track = {
  __typename?: 'Track';
  album?: Maybe<Album>;
  artists?: Maybe<Array<Maybe<Artist>>>;
  available_markets?: Maybe<Array<Maybe<Scalars['String']>>>;
  disc_number?: Maybe<Scalars['Int']>;
  duration_ms?: Maybe<Scalars['Int']>;
  explicit?: Maybe<Scalars['Boolean']>;
  href?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  popularity?: Maybe<Scalars['Int']>;
  preview_url?: Maybe<Scalars['String']>;
  track_number?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
  uri?: Maybe<Scalars['String']>;
};


export type TrackAlbumArgs = {
  full?: Maybe<Scalars['Int']>;
};


export type TrackArtistsArgs = {
  full?: Maybe<Scalars['Int']>;
  throttle?: Maybe<Scalars['Int']>;
};

export type _Service = {
  __typename?: '_Service';
  /** The sdl representing the federated service capabilities. Includes federation directives, removes federation types, and includes rest of full schema after schema directives have been applied */
  sdl?: Maybe<Scalars['String']>;
};

export type AudioFeatures = {
  analysis_url?: Maybe<Scalars['String']>;
  duration_ms?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['Int']>;
  max__speechiness?: Maybe<Scalars['Float']>;
  max_acousticness?: Maybe<Scalars['Float']>;
  max_danceability?: Maybe<Scalars['Float']>;
  max_energy?: Maybe<Scalars['Float']>;
  max_instrumentalness?: Maybe<Scalars['Float']>;
  max_liveness?: Maybe<Scalars['Float']>;
  max_loudness?: Maybe<Scalars['Float']>;
  max_popularity?: Maybe<Scalars['Int']>;
  max_valence?: Maybe<Scalars['Float']>;
  min_acousticness?: Maybe<Scalars['Float']>;
  min_danceability?: Maybe<Scalars['Float']>;
  min_energy?: Maybe<Scalars['Float']>;
  min_instrumentalness?: Maybe<Scalars['Float']>;
  min_liveness?: Maybe<Scalars['Float']>;
  min_loudness?: Maybe<Scalars['Float']>;
  min_popularity?: Maybe<Scalars['Int']>;
  min_speechiness?: Maybe<Scalars['Float']>;
  min_valence?: Maybe<Scalars['Float']>;
  mode?: Maybe<Scalars['Int']>;
  tempo?: Maybe<Scalars['Int']>;
};

export type GetGenresQueryVariables = Exact<{ [key: string]: never; }>;


export type GetGenresQuery = (
  { __typename?: 'Query' }
  & { genres?: Maybe<(
    { __typename?: 'GenresResult' }
    & { genres?: Maybe<Array<Maybe<(
      { __typename?: 'Genre' }
      & Pick<Genre, 'name'>
    )>>> }
  )> }
);

export type SearchArtistsQueryVariables = Exact<{
  searchString: Scalars['String'];
}>;


export type SearchArtistsQuery = (
  { __typename?: 'Query' }
  & { artists?: Maybe<(
    { __typename?: 'ArtistsResult' }
    & { artists?: Maybe<Array<Maybe<(
      { __typename?: 'Artist' }
      & Pick<Artist, 'id' | 'name'>
      & { images?: Maybe<Array<Maybe<(
        { __typename?: 'Image' }
        & Pick<Image, 'url'>
      )>>> }
    )>>> }
  )> }
);


export const GetGenresDocument = gql`
    query getGenres {
  genres {
    genres {
      name
    }
  }
}
    `;

/**
 * __useGetGenresQuery__
 *
 * To run a query within a React component, call `useGetGenresQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetGenresQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetGenresQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetGenresQuery(baseOptions?: Apollo.QueryHookOptions<GetGenresQuery, GetGenresQueryVariables>) {
        return Apollo.useQuery<GetGenresQuery, GetGenresQueryVariables>(GetGenresDocument, baseOptions);
      }
export function useGetGenresLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetGenresQuery, GetGenresQueryVariables>) {
          return Apollo.useLazyQuery<GetGenresQuery, GetGenresQueryVariables>(GetGenresDocument, baseOptions);
        }
export type GetGenresQueryHookResult = ReturnType<typeof useGetGenresQuery>;
export type GetGenresLazyQueryHookResult = ReturnType<typeof useGetGenresLazyQuery>;
export type GetGenresQueryResult = Apollo.QueryResult<GetGenresQuery, GetGenresQueryVariables>;
export const SearchArtistsDocument = gql`
    query searchArtists($searchString: String!) {
  artists(searchString: $searchString) {
    artists {
      id
      images {
        url
      }
      name
    }
  }
}
    `;

/**
 * __useSearchArtistsQuery__
 *
 * To run a query within a React component, call `useSearchArtistsQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchArtistsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchArtistsQuery({
 *   variables: {
 *      searchString: // value for 'searchString'
 *   },
 * });
 */
export function useSearchArtistsQuery(baseOptions: Apollo.QueryHookOptions<SearchArtistsQuery, SearchArtistsQueryVariables>) {
        return Apollo.useQuery<SearchArtistsQuery, SearchArtistsQueryVariables>(SearchArtistsDocument, baseOptions);
      }
export function useSearchArtistsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchArtistsQuery, SearchArtistsQueryVariables>) {
          return Apollo.useLazyQuery<SearchArtistsQuery, SearchArtistsQueryVariables>(SearchArtistsDocument, baseOptions);
        }
export type SearchArtistsQueryHookResult = ReturnType<typeof useSearchArtistsQuery>;
export type SearchArtistsLazyQueryHookResult = ReturnType<typeof useSearchArtistsLazyQuery>;
export type SearchArtistsQueryResult = Apollo.QueryResult<SearchArtistsQuery, SearchArtistsQueryVariables>;
export const namedOperations = {
  Query: {
    getGenres: 'getGenres',
    searchArtists: 'searchArtists'
  }
}