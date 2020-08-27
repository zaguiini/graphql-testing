module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        corejs: 3,
        useBuiltIns: 'entry'
      }
    ],
    'react-app'
  ],
  plugins: process.env.COVERAGE === 'true' ? ['istanbul'] : []
}
