const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: [
    './src/js/init.js',
    'webpack-dev-server/client?http://localhost:8080/'
  ],
  output: {
    filename: 'build.js',
    path: __dirname + '/dist'
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, include: __dirname + '/src/js', loader: 'babel-loader' },
      { test: /\.css$/, loader: ExtractTextPlugin.extract('style', 'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]') },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + '/src/index.html',
      filename: 'index.html',
      inject: 'body'
    }),
    new ExtractTextPlugin('build.css', {
        allChunks: true
    })
  ],
  devServer: {
    contentBase: "./build"
  }
};
