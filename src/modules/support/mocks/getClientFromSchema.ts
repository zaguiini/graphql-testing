import { IMocks } from '@graphql-tools/mock'
import { SchemaLink } from '@apollo/client/link/schema'

import { createClient } from '~core/lib/createClient'
import { getContinentsSchema } from '~support/mocks/getContinentsSchema'

export const getClientFromSchema = (resolvers: IMocks) => {
  const link = new SchemaLink({ schema: getContinentsSchema(resolvers) })

  return createClient(link)
}
