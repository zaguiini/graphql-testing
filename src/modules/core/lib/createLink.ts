import { HttpLink } from '@apollo/client'

export const createLink = () =>
  new HttpLink({
    uri: 'https://countries.trevorblades.com/'
  })
