/**
 * Created by jialao on 2016/7/6.
 */
/*
 * Webpack distribution configuration
 *
 * This file is set up for serving the distribution version. It will be compiled to dist/ by default
 */

'use strict';

var webpack = require('webpack');
var path = require('path')

module.exports = {

    output: {
        publicPath: "/public/",
        path: path.join(__dirname,'public/'),
        filename: 'bundle.js'
    },
    
    entry: ["webpack-dev-server/client?http://localhost:3000",
        "webpack/hot/only-dev-server",'./src/index.js'],


    
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: ['react-hot','babel?presets[]=react,presets[]=es2015']
            },
            {
                test: /.scss$/,
                exclude: /node_modules/,
                loader: 'style!css!sass'
            },
            { test: /\.json$/, loader: "json-loader" },
            {
                test: /\.(jpe?g|png|gif)$/i,
                loaders: [
                    'url?limit=10000'
                ]
            },
            {
                test: /.css$/,
               
                loader: 'style!css!autoprefixer-loader?{browsers:["last 2 version", "firefox 15"]}'
            },
            {
                test:/.less$/,
                loader:'style!css!less'
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};
