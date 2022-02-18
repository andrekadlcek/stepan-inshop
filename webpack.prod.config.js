const config = require('./webpack.config');

config.mode = 'production';
config.devServer = {};
config.devtool = false;
config.output.publicPath = '/inshop/Layout/Pages/dist/';
config.output.filename = 'app/app.js';
module.exports = config;