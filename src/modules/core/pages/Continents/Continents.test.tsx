import React from 'react'
import { waitFor } from '@testing-library/react'
import { MockList } from '@graphql-tools/mock'

import { renderWithNetwork } from '~support/components'
import Continents from './Continents'

describe('Continents', () => {
  it('renders a list of continents', async () => {
    // We define global resolvers on ~support/mocks/resolvers/continentsAPI
    const { queryAllByText } = await renderWithNetwork(<Continents />)

    await waitFor(() => {
      /**
       * String fields gets automatically resolved to Hello World, but it's possible
       * to customize it creating a global resolver
       *
       * The "10" comes from the quantity defined on continents field global resolver
       */
      expect(queryAllByText('Hello World').length).toBe(10)
    })
  })

  it('renders a list with three continents', async () => {
    const { queryAllByText } = await renderWithNetwork(<Continents />, {
      resolvers: {
        Query: () => ({
          // We can define a specific quantity per field
          continents: () => new MockList(3)
        })
      }
    })

    await waitFor(() => {
      expect(queryAllByText('Hello World').length).toBe(3)
    })
  })

  it('renders a list with America in it', async () => {
    const { queryByText } = await renderWithNetwork(<Continents />, {
      resolvers: {
        Query: () => ({
          // We can define a specific quantity per field
          continents: () => new MockList(1)
        }),
        Continent: () => ({
          name: 'America'
        })
      }
    })

    await waitFor(() => {
      expect(queryByText('America')).toBeInTheDocument()
    })
  })
})
