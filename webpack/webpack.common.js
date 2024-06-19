const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')
const { HotModuleReplacementPlugin } = require('webpack')

module.exports = {
  entry: path.resolve(__dirname, '..', 'src', 'index.tsx'),
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '..', 'assets'),
      '~': path.resolve(__dirname, '..', 'src'),
    },
    extensions: ['.jsx', '.js', '.tsx', '.ts'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)?$/,
        exclude: /node_modules/,
        use: ['ts-loader', 'babel-loader'],
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(?:ico|gif|png|jpeg|jpg|mp3|mp4)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf)$/,
        type: 'asset/inline',
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack', 'url-loader'],
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, '..', './build'),
    filename: 'bundle.js',
  },
  plugins: [
    new HTMLWebpackPlugin({
      favicon: path.resolve(__dirname, '..', 'public', 'favicon.png'),
      filename: 'index.html',
      template: path.resolve(__dirname, '..', 'src', 'index.html'),
    }),
    new HotModuleReplacementPlugin(),
    new ForkTsCheckerWebpackPlugin({
      async: false,
    }),
    new ESLintPlugin({
      extensions: ['ts', 'tsx'],
    }),
  ],
}
