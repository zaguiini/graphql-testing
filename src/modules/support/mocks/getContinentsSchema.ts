import { buildClientSchema } from 'graphql'
import { IMocks, addMocksToSchema } from '@graphql-tools/mock'

import { mergeMockResolvers } from '~support/utils'
import { continentsResolvers } from '~support/mocks/resolvers'

const introspectionQuery = require('~core/graphql.schema.json')

const schema = buildClientSchema(introspectionQuery)

const mockedSchema = addMocksToSchema({
  schema,
  mocks: continentsResolvers
})

export const getContinentsSchema = (mocks?: IMocks) => {
  if (mocks) {
    return addMocksToSchema({
      schema: mockedSchema,
      mocks: mergeMockResolvers(continentsResolvers, mocks)
    })
  }

  return mockedSchema
}
