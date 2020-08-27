import React, { FunctionComponent } from 'react'
import { ApolloProvider } from '@apollo/client'

import { createClient } from '~core/lib/createClient'
import { createLink } from '~core/lib/createLink'

const ApolloWrapper: FunctionComponent = ({ children }) => {
  const link = createLink()
  const client = createClient(link)

  return <ApolloProvider client={client}>{children}</ApolloProvider>
}

ApolloWrapper.defaultProps = {}

ApolloWrapper.displayName = 'ApolloWrapper'

export default ApolloWrapper
