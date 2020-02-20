module.exports = {
  stories: [
    "../src/**/*.stories.js",
    "../src/**/*.stories.tsx",
    "../src/**/*.stories.jsx",
    "../src/**/*.stories.ts"
  ],
  addons: [
    "@storybook/preset-create-react-app",
    "@storybook/addon-actions",
    "@storybook/addon-links"
  ],
  webpackFinal: async config => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      loader: require.resolve("babel-loader"),
      options: {
        presets: [["react-app", { flow: false, typescript: true }]]
      }
    });
    config.resolve.extensions.push(".ts", ".js", ".tsx", ".jsx");
    return config;
  }
};
