const path = require('path');
const webpack = require('webpack');

const src = path.resolve(__dirname, 'src');
const dist = path.resolve(__dirname, 'dist');

module.exports = {
  entry: [
    'react-hot-loader/patch',
    `${src}/app.js`,
  ],
  output: {
    path: dist,
    filename: 'app.bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: 'file-loader?name=[name].[ext]',
      },
      {
        test: /\.js?$/,
        include: src,
        exclude: '/node_modules/',
        use: 'babel-loader',
      },
    ]
  },
  plugins: [
    new webpack.NamedModulesPlugin()
  ]
};

