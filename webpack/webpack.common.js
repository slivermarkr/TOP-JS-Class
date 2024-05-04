const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
 entry: {
  app: './src/index.js',
 },
 plugins: [
  new HtmlWebpackPlugin({
   title: 'Production',
  }),
 ],
 output: {
  filename: '[name].bundle.js',
  path: path.resolver(__dirname, 'dist'),
  clearn: true,
 },
}