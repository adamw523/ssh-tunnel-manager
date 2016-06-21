var webpack = require('webpack');
var webpackTargetElectronRenderer = require('webpack-target-electron-renderer');

config = {
  entry: "./src/app.js",
  output: {
    path: __dirname,
    filename: "bundle.js"
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.js.?$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },

      {
        test: /\.json$/,
        loader: "json-loader"
      }
    ]
  },
  externals: {
    fs: '{}',
    net: '{}',
    dns: '{}',
    child_process: '{}'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ]
}

config.target = webpackTargetElectronRenderer(config);

module.exports = config;
