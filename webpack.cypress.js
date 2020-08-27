const { resolve } = require('path')

module.exports = {
  mode: 'development',
  // webpack will transpile TS and JS files
  resolve: {
    extensions: ['*', '.mjs', '.json', '.gql', '.graphql', '.ts', '.js'],
    alias: {
      '~core': resolve(__dirname, 'src', 'modules', 'core'),
      '~operations': resolve(__dirname, 'src', 'generated', 'graphql.tsx'),
      '~support': resolve(__dirname, 'src', 'modules', 'support')
    }
  },
  module: {
    rules: [
      {
        // every time webpack sees a TS file (except for node_modules)
        test: /\.ts$/,
        exclude: [/node_modules/],
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      },
      {
        test: /\.mjs$/,
        include: /node_modules/,
        type: 'javascript/auto'
      },
      {
        test: /\.(gql|graphql)$/,
        loader: require.resolve('graphql-tag/loader')
      }
    ]
  }
}
