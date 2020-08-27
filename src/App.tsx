import { hot } from 'react-hot-loader/root'
import React from 'react'
import Picasso from '@toptal/picasso'

import { WelcomePage } from './modules/welcome'

const App = () => (
  <Picasso>
    <WelcomePage />
  </Picasso>
)

export default hot(App)
