const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

const config = {
  mode: 'production',

  entry: './frontend/index.js',
  output: {
    filename: 'main.[contenthash].js',
    path: path.resolve(__dirname, './frontend/public/assets'),
    publicPath: '/assets/',
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
          MiniCssExtractPlugin.loader,
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
    new MiniCssExtractPlugin({
      filename: 'main.[contenthash].css',
    }),
    new HtmlWebpackPlugin({
      template: './frontend/document.ejs',
    }),
    new CleanWebpackPlugin(),
    new CompressionPlugin({
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
    }),
  ],

  resolve: {
    modules: [path.resolve(__dirname, 'frontend'), 'node_modules'],
    extensions: ['.js'],
  },
};

module.exports = config;
