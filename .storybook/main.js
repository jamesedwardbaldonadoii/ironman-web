const path = require('path');
const tailwindcss = require("tailwindcss");
const autoprefixer = require("autoprefixer");

module.exports = {
	stories: ['@/stories/*.stories.(js|mdx)'],
	addons: [
		'@storybook/addon-actions',
		'@storybook/addon-links',
		'@storybook/addon-knobs',
		'@storybook/addon-viewport',
		{
			name: '@storybook/addon-docs',
			options: {
				babelOptions: {
					presets: [
						[
							'@vue/cli-plugin-babel/preset',
							{
								jsx: false
							}
						]
					]
				}
			}
		}
	],
	webpack: config => {
		config.module.rules.push({
			test: /\.(sa|sc|c)ss$/,
			use: [{
				loader: 'style-loader'
			}, {
				loader: 'css-loader',
				options:
				{
					// The query parameter `importLoaders` allows to configure how many
					// loaders before css-loader should be applied to @imported resources.
					// `1` - `postcss-loader`.
					importLoaders: 1,
					sourceMap: true
				}
			}, {
				loader: 'postcss-loader',
				options: {
					sourceMap: true,
					plugins: (loader) => [
						tailwindcss('./tailwind.config.js'),
						autoprefixer(),
					]
				}
			}, {
				loader: 'sass-loader'
			}],
			include: path.resolve(__dirname, "..")
		});

		config.resolve.alias = {
			...config.resolve.alias,
			"@": path.resolve(__dirname, "../src")
		};

		return config;
	}
};
