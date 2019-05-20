require('dotenv').config();
const webpack = require('webpack');
const withTypescript = require('@zeit/next-typescript');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const withSass = require('@zeit/next-sass');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = withTypescript(
    withSass({
        webpack(config, options) {
            // Pass env variables to webpack
            config.plugins.push(new webpack.EnvironmentPlugin(process.env));

            // Run TS typechecker on client code
            config.plugins.push(new ForkTsCheckerWebpackPlugin());

            // Run ESLint on builds
            config.module.rules.push({
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                loader: 'eslint-loader',
                options: {
                    fix: true,
                },
            });

            // Optimize CSS output
            if (config.mode === 'production') {
                if (Array.isArray(config.optimization.minimizer)) {
                    config.optimization.minimizer.push(new OptimizeCSSAssetsPlugin({}));
                }
            }

            return config;
        },
    }),
);
