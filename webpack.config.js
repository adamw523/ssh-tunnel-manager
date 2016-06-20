module.exports = {
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
  }
}
