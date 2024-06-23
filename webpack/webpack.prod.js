const webpack = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const path = require('path')

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, '..', 'public', 'robots-production.txt'),
          to: path.resolve(__dirname, '..', 'build', 'robots.txt'),
        },
      ],
    }),
    new webpack.DefinePlugin({
      'process.env.name': JSON.stringify('production'),
    }),
  ],
}
