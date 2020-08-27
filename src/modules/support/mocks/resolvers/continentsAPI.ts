import { MockList } from '@graphql-tools/mock'

export const continentsResolvers = {
  Query: () => ({
    // We can define a specific quantity per field
    continents: () => new MockList(10)
  })
}
