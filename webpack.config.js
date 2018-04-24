// /*
// * @Author: sophie
// * @Date:   2018-04-21 12:18:44
// * @Last Modified by:   sophie
// * @Last Modified time: 2018-04-24 13:42:38
// */

var webpack             = require('webpack');
var ExtractTextPlugin   = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
//环境变量的配置dev / online
var WEBPACK_ENV         = process.env.WEBPACK_ENV || 'dev';

var getHtmlConfig       = function(name) {
    return {
          template     : "./src/view/" + name +".html",
          filename     : "view/" + name + ".html",
          inject       : true,
          hash         : true,
          chunks       : ["common", name]
    }
}

var config = {
    entry: {
        "index" : ["./src/page/index/index.js"],
        "login" : ["./src/page/login/index.js"],
        "common" : ["./src/page/common/index.js"]
    },
    output: {
        path: './dist',
        publicPath: '/dist',
        filename: 'js/[name].js'
    },
    externals:{
        'jquery': 'window.jQuery'
    },
    module: {
        loaders: [
        {test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader')},
        {test: /\.(gif|png|jpg|woff|svg|eot|ttf)\??.*$/, loader:  "url-loader?limit=100&name=resource/[name].[ext]"}
                ]
    },
     // resolve :{
     //    alias : {
     //        util            : __dirname + '/src/util',
     //        node_modules    : __dirname + '/node_modules',
     //        page            : __dirname + '/src/page',
     //        service         : __dirname + '/src/service',
     //        image           : __dirname + '/src/image'
     //    }
     // },
    plugins:[
            //独立通用模块到js/base.js
            new webpack.optimize.CommonsChunkPlugin({
                name : 'common',
                filename : 'js/base.js'
            }),
            //把css单独打包到文件里
            new ExtractTextPlugin("css/[name].css"),
            //HTML末班的处理
            new HtmlWebpackPlugin(getHtmlConfig("index")),
            new HtmlWebpackPlugin(getHtmlConfig("login")),
             
    ]
};
if( 'dev' === WEBPACK_ENV){
    config.entry.common.push("webpack-dev-server/client?http://localhost:8088/");
}
module.exports = config;

