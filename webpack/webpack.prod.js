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
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
        STRIPE_API_KEY: JSON.stringify('pk_live_51LZw7yCXAiCSgrbhrY39eP6dasTeOe3Y6V33Wx0spRIW9OiyM6NrnCzEAd6IbXknaKTT9TUchOnyrjZs6TQRhloY00fc87zgvn'),
      },
    }),
  ],
}
