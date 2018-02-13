module.exports = {
  entry: "./lib/dos.js",
  output: {
  	filename: "./lib/bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/
      }
    ]
  },
  devtool: 'source-map',
};
