var babelPresets = [
  "es2015",
];
var babelPlugins = [
  "transform-object-assign",
];

module.exports = {
  entry: "./src/main.js",
  output: {
    path: "./dist",
    filename: "main.js",
  },

  devtool: "inline-source-map",

  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loader: "eslint-loader",
      },
    ],
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: { presets: babelPresets, plugins: babelPlugins },
      },
      {
        test: /\.scss$/,
        loader: "style!css!sass",
      },
    ],
  },
};
