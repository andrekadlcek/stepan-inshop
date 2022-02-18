const _MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require("path");

const MiniCssExtractPlugin = new _MiniCssExtractPlugin({
    filename: '[name].bundle.css',
    chunkFilename: '[id].css'
});





module.exports = {
    MiniCssExtractPlugin: MiniCssExtractPlugin
};