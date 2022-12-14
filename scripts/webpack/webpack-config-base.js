const path = require("path");
const typescriptRule = require("./rules/typescript.rule");

module.exports = {
  mode: "development",
  devtool: false,
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
    alias: {
      "@": path.resolve(__dirname, "../../src"),
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: "pre",
        use: ["source-map-loader"],
      },
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
        exclude: /node_modules/,
      },
      typescriptRule,
      {
        test: /\.css$/,
        use: [
          "isomorphic-style-loader-react18",
          {
            loader: "css-loader",
            options: {
              modules: {
                mode: "local",
                localIdentName: "[path][name]_[local]",
              },
            },
          },
        ],
      },
    ],
  },
};
