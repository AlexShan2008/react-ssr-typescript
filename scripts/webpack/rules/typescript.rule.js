module.exports = {
  test: /\.(j|t)sx?$/,
  use: [
    {
      loader: "babel-loader",
      options: {
        cacheDirectory: true,
      },
    },
  ],
  exclude: /node_modules/,
};
