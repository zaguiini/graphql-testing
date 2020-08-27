import { hot } from 'react-hot-loader/root'
import React from 'react'
import Picasso from '@toptal/picasso'

import { ApolloWrapper } from '~core/components'
import { Continents } from '~core/pages'

const App = () => (
  <Picasso>
    <ApolloWrapper>
      <Continents />
    </ApolloWrapper>
  </Picasso>
)

export default hot(App)
