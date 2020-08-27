/* global cy */
import { graphql, GraphQLSchema } from 'graphql'
import { addMocksToSchema, IMocks } from '@graphql-tools/mock'

import { getContinentsSchema } from '~support/mocks'
import { mergeMockResolvers } from '~support/utils'
import { continentsResolvers } from './mocks'
import { responseStub } from './responseStub'

const continentsSchema = getContinentsSchema()

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Cypress {
    interface Chainable {
      mockGraphql(mocks: IMocks): Cypress.Chainable
      updateContinentsGraphqlMock(mocks: IMocks): Cypress.Chainable
    }
  }
}

const { Commands } = Cypress

Commands.add('mockGraphql', (customMocks: IMocks) => {
  let mockedSchemas = addMocksToSchema({
    schema: continentsSchema,
    mocks: mergeMockResolvers(continentsResolvers, customMocks)
  })

  cy.wrap({
    addMockFunctionsToSchema(newMocks: IMocks) {
      mockedSchemas = addMocksToSchema({
        schema: mockedSchemas,
        mocks: mergeMockResolvers(continentsResolvers, newMocks)
      })
    }
  }).as('continentsSchema')

  return cy.on('window:before:load', win => {
    const originalFetch = win.fetch

    const stubbedWindow = cy.stub(win, 'fetch')

    stubbedWindow
      /**
       * This should be your desired endpoint to mock
       * Couldn't use the env var for some reason
       */
      .withArgs('https://countries.trevorblades.com')
      .callsFake(getGraphQL(() => mockedSchemas))
    stubbedWindow.callsFake((path, options) => originalFetch(path, options))
  })
})

Commands.add('updateContinentsGraphqlMock', mocks => {
  cy.get(`@continentsSchema`).invoke('addMockFunctionsToSchema', mocks)
})

const getQueryName = (query: string) => {
  const result = query.match('(query|mutation) ([^{(]+)')

  if (result) {
    return result[1] + ' ' + result[2]
  }

  return query
}
const getGraphQL = (getSchema: () => GraphQLSchema) => {
  return (path: string, options: { body: string }) => {
    const { body } = options
    const { operationName, variables, query } = JSON.parse(body)

    const schema = getSchema()

    return graphql(schema, query, null, null, variables, operationName).then(
      (result: object) => {
        console.groupCollapsed(`Graphql ${getQueryName(query)}`)
        console.log(result)
        console.groupEnd()

        return responseStub(result)
      }
    )
  }
}
