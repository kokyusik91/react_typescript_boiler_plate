const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: `${path.resolve(__dirname, '../src')}/index.tsx`,
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, '../build'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      // 현재 어떤 html파일로 build를 할것인지 기입
      template: `${path.resolve(__dirname, '../public')}/index.html`,
      templateParameters: {
        kyusikko: process.env.NODE_ENV === 'development' ? '(개발용)' : '',
      },
    }),
    new webpack.ProvidePlugin({
      React: 'react',
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '..src/'),
    },
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.css', '.json'],
  },
};
