const path = require('path')

const mode = process.env.NODE_ENV || 'development'
const prod = mode === 'production'

module.exports = {
  entry: {
    bundle: [path.resolve(__dirname, 'src/main.ts')],
  },
  resolve: {
    extensions: ['.ts', '.js', '.gts', '.gjs'],
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].js',
    chunkFilename: '[name].[id].js'
  },
  module: {
    rules: [
      {
        test: /\.(ts|js|gts|gjs)$/,
        exclude: /(node_modules)/,
        use: ['babel-loader', '@glimmerx/webpack-loader']
      }
    ]
  },
  mode,
  devServer: {
    port: 4200
  },
  devtool: prod ? false : 'source-map'
}
