const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');
const JSLoader = {
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    use: {
        loader: 'babel-loader'
    }
};

const CSSLoader = {
    test: /\.css$/i,
    exclude: /node_modules/,
    use: [
        {
            loader: MiniCssExtractPlugin.loader,
            options: {
                publicPath: './'
            }
        },
        {
            loader: 'css-loader',
            options: { importLoaders: 1 },
        },
        {
            loader: 'postcss-loader',
            options: {
                postcssOptions: {
                    config: path.resolve(__dirname, 'postcss.config.js'),
                }
            },
        },
    ],
};

const IMGLoader = {
    test: /\.(jpg|png|svg)$/,
    use: {
        loader: "file-loader",
        options: {
            name: '[path][name].[ext]',
            context: path.resolve(__dirname, "src/"),
            outputPath: 'dist/',
            useRelativePaths: true
        },
    }
}

const INCLUDE_PATTERN = /\<include src=\"(.+)\"\/?\>(?:\<\/include\>)?/gi;
const processNestedHtml = (content, loaderContext) => !INCLUDE_PATTERN.test(content) ?
    content : content.replace(INCLUDE_PATTERN, (m, src) => processNestedHtml(fs.readFileSync(path.resolve(loaderContext.context, src), 'utf8'), loaderContext));

const HTMLLoader = {
    test: /\.html$/,
    use: {
        loader: "html-loader",
        options: {
            preprocessor: processNestedHtml
        }
    }
}

module.exports = {
    JSLoader: JSLoader,
    CSSLoader: CSSLoader,
    IMGLoader: IMGLoader,
    HTMLLoader: HTMLLoader
};