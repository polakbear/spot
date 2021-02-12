import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Track = {
  __typename?: 'Track';
  id?: Maybe<Scalars['String']>;
  album?: Maybe<Album>;
  artists?: Maybe<Array<Maybe<Artist>>>;
  available_markets?: Maybe<Array<Maybe<Scalars['String']>>>;
  disc_number?: Maybe<Scalars['Int']>;
  duration_ms?: Maybe<Scalars['Int']>;
  explicit?: Maybe<Scalars['Boolean']>;
  href?: Maybe<Scalars['String']>;
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

export type Artist = {
  __typename?: 'Artist';
  id?: Maybe<Scalars['String']>;
  href?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  uri?: Maybe<Scalars['String']>;
};

export type Album = {
  __typename?: 'Album';
  id?: Maybe<Scalars['String']>;
  artists?: Maybe<Array<Maybe<Artist>>>;
  available_markets?: Maybe<Array<Maybe<Scalars['String']>>>;
  href?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type Image = {
  __typename?: 'Image';
  height?: Maybe<Scalars['Int']>;
  url?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
};

export type RecommendationsConnection = {
  __typename?: 'RecommendationsConnection';
  tracks?: Maybe<Array<Maybe<Track>>>;
};

export type AudioFeatures = {
  id?: Maybe<Scalars['String']>;
  min_acousticness?: Maybe<Scalars['Int']>;
  max_acousticness?: Maybe<Scalars['Int']>;
  min_danceability?: Maybe<Scalars['Int']>;
  max_danceability?: Maybe<Scalars['Int']>;
  min_energy?: Maybe<Scalars['Int']>;
  max_energy?: Maybe<Scalars['Int']>;
  min_instrumentalness?: Maybe<Scalars['Int']>;
  max_instrumentalness?: Maybe<Scalars['Int']>;
  min_popularity?: Maybe<Scalars['Int']>;
  max_popularity?: Maybe<Scalars['Int']>;
  min_liveness?: Maybe<Scalars['Int']>;
  max_liveness?: Maybe<Scalars['Int']>;
  min_loudness?: Maybe<Scalars['Int']>;
  max_loudness?: Maybe<Scalars['Int']>;
  min_speechiness?: Maybe<Scalars['Int']>;
  max__speechiness?: Maybe<Scalars['Int']>;
  min_valence?: Maybe<Scalars['Int']>;
  max_valence?: Maybe<Scalars['Int']>;
  analysis_url?: Maybe<Scalars['String']>;
  duration_ms?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
  mode?: Maybe<Scalars['String']>;
  tempo?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  recommendations?: Maybe<RecommendationsConnection>;
};


export type QueryRecommendationsArgs = {
  seedTracks: Array<Maybe<Scalars['String']>>;
  seedGenres: Array<Maybe<Scalars['String']>>;
  seedArtists: Array<Maybe<Scalars['String']>>;
  audioFeatures?: Maybe<AudioFeatures>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Track: ResolverTypeWrapper<Track>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Artist: ResolverTypeWrapper<Artist>;
  Album: ResolverTypeWrapper<Album>;
  Image: ResolverTypeWrapper<Image>;
  RecommendationsConnection: ResolverTypeWrapper<RecommendationsConnection>;
  AudioFeatures: AudioFeatures;
  Query: ResolverTypeWrapper<{}>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Track: Track;
  String: Scalars['String'];
  Int: Scalars['Int'];
  Boolean: Scalars['Boolean'];
  Artist: Artist;
  Album: Album;
  Image: Image;
  RecommendationsConnection: RecommendationsConnection;
  AudioFeatures: AudioFeatures;
  Query: {};
};

export type TrackResolvers<ContextType = any, ParentType extends ResolversParentTypes['Track'] = ResolversParentTypes['Track']> = {
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  album?: Resolver<Maybe<ResolversTypes['Album']>, ParentType, ContextType, RequireFields<TrackAlbumArgs, never>>;
  artists?: Resolver<Maybe<Array<Maybe<ResolversTypes['Artist']>>>, ParentType, ContextType, RequireFields<TrackArtistsArgs, never>>;
  available_markets?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  disc_number?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  duration_ms?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  explicit?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  href?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  popularity?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  preview_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  track_number?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  uri?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ArtistResolvers<ContextType = any, ParentType extends ResolversParentTypes['Artist'] = ResolversParentTypes['Artist']> = {
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  href?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  uri?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AlbumResolvers<ContextType = any, ParentType extends ResolversParentTypes['Album'] = ResolversParentTypes['Album']> = {
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  artists?: Resolver<Maybe<Array<Maybe<ResolversTypes['Artist']>>>, ParentType, ContextType>;
  available_markets?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  href?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ImageResolvers<ContextType = any, ParentType extends ResolversParentTypes['Image'] = ResolversParentTypes['Image']> = {
  height?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  width?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RecommendationsConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['RecommendationsConnection'] = ResolversParentTypes['RecommendationsConnection']> = {
  tracks?: Resolver<Maybe<Array<Maybe<ResolversTypes['Track']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  recommendations?: Resolver<Maybe<ResolversTypes['RecommendationsConnection']>, ParentType, ContextType, RequireFields<QueryRecommendationsArgs, 'seedTracks' | 'seedGenres' | 'seedArtists'>>;
};

export type Resolvers<ContextType = any> = {
  Track?: TrackResolvers<ContextType>;
  Artist?: ArtistResolvers<ContextType>;
  Album?: AlbumResolvers<ContextType>;
  Image?: ImageResolvers<ContextType>;
  RecommendationsConnection?: RecommendationsConnectionResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;