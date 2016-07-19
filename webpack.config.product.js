/**
 * Created by jialao on 2016/7/19.
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

    entry: ['./src/index.js'],



    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: ['babel?presets[]=react,presets[]=es2015']
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
            },
            {
                test: /\.(png|jpg|woff|woff2|eot|ttf|svg)$/,
                loader: 'url-loader?limit=8192'
            }
        ]
    }
    
};