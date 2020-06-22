const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

const config = {
  mode: 'development',

  entry: './frontend/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, './dist'),
  },

  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: [path.resolve(__dirname, 'node_modules')],
        use: 'babel-loader',
      },
      {
        test: /\.ejs$/,
        loader: 'ejs-loader',
      },
      {
        test: /\.(png|jpg|gif|svg|woff|woff2|ttf|eot)$/i,
        use: 'file-loader',
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
          'postcss-loader',
        ],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './frontend/document.ejs',
    }),
    new webpack.HotModuleReplacementPlugin(),
    new Dotenv(),
  ],

  resolve: {
    modules: [path.resolve(__dirname, 'frontend'), 'node_modules'],
    extensions: ['.js'],
  },

  devServer: {
    hot: true,
    overlay: true,
    historyApiFallback: true,
    contentBase: path.join(__dirname, 'frontend/public'),
  },
};

module.exports = config;
