const path = require("path");
const { merge } = require("webpack-merge");
const base = require("./webpack-config-base");

module.exports = merge(base, {
  target: "web",
  entry: path.resolve(__dirname, "../../src/client/index.tsx"),
  output: {
    path: path.resolve(__dirname, "../../public"),
    filename: "client.js",
  },
});
