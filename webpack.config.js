const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const loaders = require('./loaders');
const plugins = require('./plugins');
const { preprocess } = require('./svelte.config');

const mode = process.env.NODE_ENV || 'development';
const prod = mode === 'production';

module.exports = {
    entry: {
        index: './src/js/app.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        filename: '[name].bundle.js',
    },
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.(js|mjs|svelte|ts)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /node_modules\/svelte\/.*\.mjs$/,
                resolve: {
                    fullySpecified: false // load Svelte correctly
                }
            },
            {
                test: /.(svelte)$/,
                use: {
                    loader: 'svelte-loader',
                    options: {
                        // svelte options...,
                        preprocess
                    },
                },
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            },
            {
                test: /\.ts?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },

            loaders.CSSLoader,
            loaders.HTMLLoader,
            {
                test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[path][name].[ext]',
                            useRelativePath: true,
                        },
                    },
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            bypassOnDebug: true, // webpack@1.x
                            disable: true, // webpack@2.x and newer
                        },
                    },
                ]
            },
        ]
    },
    plugins: [
        plugins.MiniCssExtractPlugin,

        new HtmlWebpackPlugin({ template: './src/index.html' })
    ],
    devServer: {
        contentBase: ['./src', './dist'],
        watchContentBase: false,
        host: '0.0.0.0',
        port: 9000,
        open: false,
        inline: false,
        hot: false,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
            "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
        }
    },
    resolve: {
        extensions: ['.js', '.jsx', '.svelte', ".ts", ".tsx", '.scss', '.gif', '.png', '.jpg', '.jpeg', '.svg', '.ttf']
    }
};