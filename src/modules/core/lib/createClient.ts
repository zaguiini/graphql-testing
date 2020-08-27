import { ApolloLink, ApolloClient, InMemoryCache } from '@apollo/client'

export const createClient = (link: ApolloLink) => {
  return new ApolloClient({
    link,
    cache: new InMemoryCache()
  })
}
