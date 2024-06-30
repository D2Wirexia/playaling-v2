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
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
        STRIPE_API_KEY: JSON.stringify('pk_test_51LZw7yCXAiCSgrbhzuTX6GqooXqH2E01x12FZV5Ev5vvDlvyeMxb6ZfzcQ64xxsfcnJvxFjJE4MrP91VjAN1gmAM00aA4GnJkt'),
      },
    }),
    new ReactRefreshWebpackPlugin(),
  ],
}
