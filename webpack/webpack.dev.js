const webpack = require('webpack')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  devServer: {
    hot: true,
    open: true,
    port: 1111,
    historyApiFallback: true,
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, '..', 'public', 'robots-staging.txt'),
          to: path.resolve(__dirname, '..', 'build', 'robots.txt'),
        },
      ],
    }),
    new webpack.DefinePlugin({
      'process.env.name': JSON.stringify('development'),
    }),
    new ReactRefreshWebpackPlugin(),
  ],
}
