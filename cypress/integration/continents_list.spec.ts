import HomePage from '../pages/homePage'

/* global cy */

describe('Continents page', () => {
  describe('when data is loaded', () => {
    beforeEach(() => {
      cy.mockGraphql({
        Query: () => ({
          continents: () => [
            {
              code: 'AF',
              name: 'Africa'
            },
            {
              code: 'AM',
              name: 'America'
            }
          ]
        })
      })
    })

    it('sees the continent list', () => {
      const page = new HomePage()

      page.visit()

      page.rootElement().should('include.text', 'A list of continents')
      page.rootElement().should('include.text', 'Africa')
      page.rootElement().should('include.text', 'America')
    })
  })

  describe('when there is an error on the request', () => {
    beforeEach(() => {
      cy.mockGraphql({
        Continent: () => {
          throw new Error('boom')
        }
      })
    })

    it('sees error message', () => {
      const page = new HomePage()

      page.visit()

      page.rootElement().should('include.text', 'Something went wrong, dude...')
    })
  })
})
