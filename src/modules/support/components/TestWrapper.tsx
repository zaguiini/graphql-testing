import React, { Suspense, ReactNode } from 'react'
import {
  ApolloClient,
  ApolloProvider,
  NormalizedCacheObject
} from '@apollo/client'
import { TestingPicasso } from '@toptal/picasso/test-utils'

interface TestWrapperProps {
  client?: ApolloClient<NormalizedCacheObject>
  children: ReactNode
  shouldWaitForResolution?: boolean
}

type ApolloTestWrapperProps = 'client' | 'children'

const ApolloTestWrapper = ({
  client,
  children
}: Pick<TestWrapperProps, ApolloTestWrapperProps>) => {
  if (!client) return <>{children}</>

  return <ApolloProvider client={client}>{children}</ApolloProvider>
}

type TestLayoutProps = 'shouldWaitForResolution' | 'children'

const TestLayout = ({
  shouldWaitForResolution,
  children
}: Pick<TestWrapperProps, TestLayoutProps>) => {
  /**
   * On Talent Portal our tests usually depend on ViewerData being loaded, so we do
   * a slightly different check:
   *
   * const viewer = useContext(ViewerContext)
   * if (!viewer && shouldWaitForResolution) {
   *  return null
   * }
   */
  if (shouldWaitForResolution === false) {
    return <>{children}</>
  }

  return (
    <Suspense fallback='Loading...'>
      <div data-testid='testLayout'>{children}</div>
    </Suspense>
  )
}

type TestLayoutWrapperProps = 'shouldWaitForResolution' | 'client' | 'children'

const TestLayoutWrapper = ({
  shouldWaitForResolution,
  children,
  client
}: Pick<TestWrapperProps, TestLayoutWrapperProps>) => {
  if (client) {
    return (
      <TestLayout shouldWaitForResolution={shouldWaitForResolution}>
        {children}
      </TestLayout>
    )
  }

  return <>{children}</>
}

export const TestWrapper = ({
  client,
  children,
  shouldWaitForResolution = true
}: TestWrapperProps) => {
  return (
    <TestingPicasso>
      <ApolloTestWrapper client={client}>
        <TestLayoutWrapper
          shouldWaitForResolution={shouldWaitForResolution}
          client={client}
        >
          {children}
        </TestLayoutWrapper>
      </ApolloTestWrapper>
    </TestingPicasso>
  )
}
