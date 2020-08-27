import { IMocks } from '@graphql-tools/mock'

export const mergeMockResolvers = (
  defaultResolvers: IMocks,
  resolvers: IMocks = {}
) => ({
  ...defaultResolvers,
  ...Object.entries(resolvers).reduce((acc, [key, resolver]) => {
    if (defaultResolvers[key]) {
      acc[key] = (...args) => {
        const overrides = resolver(...args)

        if (overrides === null) {
          return null
        }

        return {
          ...defaultResolvers[key](...args),
          ...overrides
        }
      }
    } else {
      acc[key] = resolver
    }

    return acc
  }, {} as IMocks)
})
