const path = require('path');
const common = require('./webpack.common')
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
 mode: 'development',
 output: {
  filename: '[name].bundle.js',
  path: path.resolve(__dirname, 'dist'),
  assetModuleFilename: 'imgs/[name][ext]',
 },
 plugins: [new HtmlWebpackPlugin({
  template: './src/template.html'
 })],
 module: {
  rules:[
   {
    test: /\.scss$/,
    use: ['style-loader','css-loader','sass-loader']
   },
  ],
 },
});