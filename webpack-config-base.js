const path = require("path");
module.exports = {
  mode: "development",
  devtool: false,
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
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
