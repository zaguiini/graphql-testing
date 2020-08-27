import { ApolloClient, NormalizedCacheObject } from '@apollo/client'
import { IMocks } from '@graphql-tools/mock'
import React, { ComponentProps, ReactElement, ReactNode } from 'react'
import {
  render as testingLibraryRender,
  RenderOptions as RTLRenderOptions,
  waitFor
} from '@testing-library/react'

import { TestWrapper } from './TestWrapper'
import { getClientFromSchema } from '~support/mocks'

interface GetApolloClientOptions {
  client?: ApolloClient<NormalizedCacheObject>
  resolvers?: IMocks
}

const getApolloClient = ({
  client,
  resolvers = {}
}: GetApolloClientOptions) => {
  return client ?? getClientFromSchema(resolvers)
}

interface TestBedOptions {
  wrapperProps: Partial<ComponentProps<typeof TestWrapper>>
  resolvers?: IMocks
  renderOptions?: RTLRenderOptions
}

type RenderOptions = Partial<Omit<TestBedOptions, 'resolvers'>> & {
  includeWrapper?: boolean
}

export const render = (
  element: ReactElement,
  {
    wrapperProps = {},
    includeWrapper = true,
    renderOptions = {}
  }: RenderOptions = {}
) =>
  testingLibraryRender(element, {
    wrapper: includeWrapper
      ? ({ children }: { children?: ReactNode }) => (
          // eslint-disable-next-line react/jsx-props-no-spreading
          <TestWrapper {...wrapperProps}>{children}</TestWrapper>
        )
      : undefined,
    ...renderOptions
  })

export const renderWithNetwork = async (
  element: ReactElement,
  {
    wrapperProps = {},
    resolvers = {},
    renderOptions = {}
  }: Partial<TestBedOptions> = {}
) => {
  const { client, ...props } = wrapperProps

  const helpers = testingLibraryRender(element, {
    wrapper: ({ children }: { children?: ReactNode }) => (
      // eslint-disable-next-line react/jsx-props-no-spreading
      <TestWrapper client={getApolloClient({ client, resolvers })} {...props}>
        {children}
      </TestWrapper>
    ),
    ...renderOptions
  })

  if (
    props.shouldWaitForResolution === false ||
    helpers.queryByTestId('testLayout')
  ) {
    return helpers
  }

  await waitFor(() => helpers.getByTestId('testLayout'))

  return {
    ...helpers,
    rerender: async (el: ReactElement) => {
      helpers.rerender(el)
      await waitFor(() => helpers.getByTestId('testLayout'))
    }
  }
}
