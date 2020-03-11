const path = require('path');

module.exports = {
  stories: ['../src/components/stories/*.stories.js'],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-knobs',
    '@storybook/addon-viewport',
    '@storybook/addon-docs'
  ],
  webpack: config => {
    config.module.rules.push({
      test: /\.scss$/,
      loaders: ["style-loader", "css-loader", "sass-loader"],
      include: path.resolve(__dirname, "../")
    });

    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(__dirname, "../src")
    };
    
    return config;
  }
};
