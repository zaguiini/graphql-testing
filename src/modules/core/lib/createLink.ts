import { HttpLink } from '@apollo/client'

export const createLink = () =>
  new HttpLink({
    uri: process.env.DAVINCI_APP_API_URL
  })
