const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
  entry: { main: './src/index.js' },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.scss$/,
        use:  [  'style-loader', MiniCssExtractPlugin.loader,'css-loader', 'postcss-loader', 'sass-loader']
      },
    ],
  },
  devServer: {
    contentBase: './dist',
    stats: 'errors-only'
  },
  plugins: [
    new ExtractTextPlugin({filename: 'style.css'}),
    new MiniCssExtractPlugin({
      filename: 'style.css',
    })
  ]
};
