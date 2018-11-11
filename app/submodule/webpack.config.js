const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    publicPath: "/dist",
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    contentBase: 'dist',
    publicPath: '/dist', // must be absolute path http://localhost:8080/dist ~= /dist
  },
};