const path = require('path');
const webpack = require('webpack');
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        'main': './client/js/main.js'
    },
    output: {
        path: './server/public',
        filename: 'bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({ template: './client/index.html' }),
        new CopyWebpackPlugin([ { from: './client/templates', to: 'templates' } ]),
        new CopyWebpackPlugin([ { from: './client/css/styles.css', to: 'styles.css' } ])
    ],
    resolve: {
        extensions: ['', '.js']
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel', exclude: /node_modules/ }
        ]
    }
};
