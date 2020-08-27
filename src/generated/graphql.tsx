import gql from 'graphql-tag'
import * as ApolloReactCommon from '@apollo/react-common'
import * as ApolloReactHooks from '@apollo/react-hooks'
export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  /** The `Upload` scalar type represents a file upload. */
  Upload: any
}

export type Query = {
  __typename?: 'Query'
  continents: Continent[]
  continent?: Maybe<Continent>
  countries: Country[]
  country?: Maybe<Country>
  languages: Language[]
  language?: Maybe<Language>
}

export type QueryContinentsArgs = {
  filter?: Maybe<ContinentFilterInput>
}

export type QueryContinentArgs = {
  code: Scalars['ID']
}

export type QueryCountriesArgs = {
  filter?: Maybe<CountryFilterInput>
}

export type QueryCountryArgs = {
  code: Scalars['ID']
}

export type QueryLanguagesArgs = {
  filter?: Maybe<LanguageFilterInput>
}

export type QueryLanguageArgs = {
  code: Scalars['ID']
}

export type ContinentFilterInput = {
  code?: Maybe<StringQueryOperatorInput>
}

export type StringQueryOperatorInput = {
  eq?: Maybe<Scalars['String']>
  ne?: Maybe<Scalars['String']>
  in?: Maybe<Maybe<Scalars['String']>[]>
  nin?: Maybe<Maybe<Scalars['String']>[]>
  regex?: Maybe<Scalars['String']>
  glob?: Maybe<Scalars['String']>
}

export type Continent = {
  __typename?: 'Continent'
  code: Scalars['ID']
  name: Scalars['String']
  countries: Country[]
}

export type Country = {
  __typename?: 'Country'
  code: Scalars['ID']
  name: Scalars['String']
  native: Scalars['String']
  phone: Scalars['String']
  continent: Continent
  capital?: Maybe<Scalars['String']>
  currency?: Maybe<Scalars['String']>
  languages: Language[]
  emoji: Scalars['String']
  emojiU: Scalars['String']
  states: State[]
}

export type Language = {
  __typename?: 'Language'
  code: Scalars['ID']
  name?: Maybe<Scalars['String']>
  native?: Maybe<Scalars['String']>
  rtl: Scalars['Boolean']
}

export type State = {
  __typename?: 'State'
  code?: Maybe<Scalars['String']>
  name: Scalars['String']
  country: Country
}

export type CountryFilterInput = {
  code?: Maybe<StringQueryOperatorInput>
  currency?: Maybe<StringQueryOperatorInput>
  continent?: Maybe<StringQueryOperatorInput>
}

export type LanguageFilterInput = {
  code?: Maybe<StringQueryOperatorInput>
}

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}

export type GetContinentsQueryVariables = Exact<{ [key: string]: never }>

export type GetContinentsQuery = { __typename?: 'Query' } & {
  continents: ({ __typename?: 'Continent' } & Pick<
    Continent,
    'code' | 'name'
  >)[]
}

export const GetContinentsDocument = gql`
  query GetContinents {
    continents {
      code
      name
    }
  }
`

/**
 * __useGetContinentsQuery__
 *
 * To run a query within a React component, call `useGetContinentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetContinentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetContinentsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetContinentsQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    GetContinentsQuery,
    GetContinentsQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<
    GetContinentsQuery,
    GetContinentsQueryVariables
  >(GetContinentsDocument, baseOptions)
}
export function useGetContinentsLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    GetContinentsQuery,
    GetContinentsQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<
    GetContinentsQuery,
    GetContinentsQueryVariables
  >(GetContinentsDocument, baseOptions)
}
export type GetContinentsQueryHookResult = ReturnType<
  typeof useGetContinentsQuery
>
export type GetContinentsLazyQueryHookResult = ReturnType<
  typeof useGetContinentsLazyQuery
>
export type GetContinentsQueryResult = ApolloReactCommon.QueryResult<
  GetContinentsQuery,
  GetContinentsQueryVariables
>
