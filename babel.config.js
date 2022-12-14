module.exports = (api) => {
  api.cache(true);

  return {
    presets: ["@babel/preset-react", "@babel/preset-env"],
    assumptions: {
      // https://babeljs.io/docs/en/babel-plugin-proposal-private-methods#loose
      privateFieldsAsProperties: true,
      // When using the `legacy: true` mode, the `setPublicClassFields` assumption must be enabled to support the `@babel/plugin-proposal-decorators`.
      setPublicClassFields: true,
    },
    overrides: [
      {
        // Only enable the React preset for .jsx and .tsx files
        test: /\.(jsx|tsx)$/,
        presets: [["@babel/preset-react", { runtime: "automatic" }]],
      },
      {
        // Only enable the TypeScript preset for .ts and .tsx files
        test: /\.(ts|tsx)$/,
        presets: [["@babel/preset-typescript", { allowDeclareFields: true }]],
      },
    ],
  };
};
