const { resolve } = require('path')

module.exports = ({ config }) => {
  config.module.rules[0].oneOf.unshift({
    test: /\.(graphql|gql)$/,
    exclude: /node_modules/,
    loader: require.resolve('graphql-tag/loader')
  })

  config.resolve.alias = {
    ...config.resolve.alias,
    '~core': resolve(__dirname, 'src', 'modules', 'core'),
    '~queries': resolve(__dirname, 'src', 'generated', 'graphql.tsx'),
    '~support': resolve(__dirname, 'src', 'modules', 'support')
  }

  return config
}
