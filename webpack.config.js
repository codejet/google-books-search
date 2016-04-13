var HtmlWebpackPlugin = require('html-webpack-plugin')
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/src/index.html',
  filename: 'index.html',
  inject: 'body'
});
module.exports = {
  entry: [
    './src/js/init.js'
  ],
  output: {
    filename: 'build.js',
    path: __dirname + '/dist'
  },
  module: {
    loaders: [
      {test: /\.jsx?$/, include: __dirname + '/src/js', loader: 'babel-loader'}
    ]
  },
  plugins: [HTMLWebpackPluginConfig]
};
