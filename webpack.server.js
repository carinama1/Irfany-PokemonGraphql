const path = require("path");
const nodeExternals = require("webpack-node-externals");

module.exports = {
  entry: "./server/server.js",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
  },
  target: "node",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
    ],
  },
  externals: [nodeExternals()],
};
