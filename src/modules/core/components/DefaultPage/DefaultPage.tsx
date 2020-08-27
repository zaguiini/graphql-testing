import React, { FunctionComponent, ReactNode } from 'react'
import { Page, Container } from '@toptal/picasso'

import { mainContent } from './styles'

export interface Props {
  title: string
  children: ReactNode
}

const DefaultPage: FunctionComponent<Props> = ({ title, children }) => (
  <Page>
    <Page.Header title={title} />
    <Page.Content>
      <Container bottom='small' css={mainContent} top='small'>
        {children}
      </Container>
    </Page.Content>
    <Page.Footer />
  </Page>
)

DefaultPage.defaultProps = {}

DefaultPage.displayName = 'DefaultPage'

export default DefaultPage
