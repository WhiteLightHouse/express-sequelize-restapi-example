/*jslint node: true */

const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    mode: 'development',
    entry: ['./src/bin/www.js', 'babel-polyfill'],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
        {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env'],
                    plugins: ['@babel/plugin-proposal-object-rest-spread']
                }
            }
        }
        ],
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({ options: {} }),
    ],
    target:'node',
    externals: [nodeExternals()],
};
