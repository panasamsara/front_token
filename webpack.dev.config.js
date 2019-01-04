const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const merge = require('webpack-merge');
const webpackBaseConfig = require('./webpack.base.config.js');
const fs = require('fs');

fs.open('./src/config/env.js', 'w', function (err, fd) {
    const buf = 'export default "development";';
    fs.write(fd, buf, 0, buf.length, 0, function (err, written, buffer) {
    });
});

module.exports = merge(webpackBaseConfig, {
    devtool: 'inline-source-map',
    output: {
        publicPath: '/dist/',
        filename: '[name].js',
        chunkFilename: '[name].chunk.js'
    },
    devServer: {
        hot: true,
        contentBase: './',
        host: 'localhost',
        port: 8081,
        open: true,
        // changeOrigin: true, //可否跨域
        proxy: {'/api': {target: 'http://127.0.0.1:8000', changeOrigin: true, pathRewrite: {'^/api': '/api'}}},
        // proxy: {'/api': {target: 'http://hmsim.dangdaifintech.com', changeOrigin: true, pathRewrite: {'^/api': ''}}},
    },
    plugins: [
        new ExtractTextPlugin({
            filename: '[name].css',
            allChunks: true
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendors',
            filename: 'vendors.js'
        }),
        new HtmlWebpackPlugin({
            filename: '../index.html',
            template: './src/template/index.ejs',
            inject: false
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
});