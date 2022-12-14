const path = require("path");
const { merge } = require("webpack-merge");
const base = require("./webpack-config-base");
const webpackNodeExternals = require("webpack-node-externals");

module.exports = merge(base, {
  target: "node",
  entry: path.resolve(__dirname, "../../src/sever/index.tsx"),
  externals: [webpackNodeExternals()],
  output: {
    path: path.resolve(__dirname, "../../build"),
    filename: "sever.js",
  },
});
