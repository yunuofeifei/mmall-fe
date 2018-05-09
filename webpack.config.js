// /*
// * @Author: sophie
// * @Date:   2018-04-21 12:18:44
// * @Last Modified by:   sophie
// * @Last Modified time: 2018-05-09 16:56:38
// */

var webpack             = require('webpack');
var ExtractTextPlugin   = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
//环境变量的配置dev / online
var WEBPACK_ENV         = process.env.WEBPACK_ENV || 'dev';

var getHtmlConfig       = function(name, title) {
    return {
          template     : "./src/view/" + name +".html",
          filename     : "view/" + name + ".html",
          title        : title,
          inject       : true,
          hash         : true,
          chunks       : ["common", name]
    }
}

var config = {
    entry: {
        "index"             : ["./src/page/index/index.js"],
        "list"              : ["./src/page/list/index.js"],
        "cart"              : ["./src/page/cart/index.js"],
        "order-confirm"     : ["./src/page/order-confirm/index.js"],
        "order-list"        : ["./src/page/order-list/index.js"],
        "order-detail"      : ["./src/page/order-detail/index.js"],
        "user-login"        : ["./src/page/user-login/index.js"],
        "user-register"     : ["./src/page/user-register/index.js"],
        "detail"            : ["./src/page/detail/index.js"],
        "user-pass-reset"   : ["./src/page/user-pass-reset/index.js"],
        "user-center"       : ["./src/page/user-center/index.js"],
        "user-center-update": ["./src/page/user-center-update/index.js"],
        "user-pass-update"  : ["./src/page/user-pass-update/index.js"],
        "common"            : ["./src/page/common/index.js"],
        "result"            : ["./src/page/result/index.js"]
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
        {test: /\.string$/, loader: 'html-loader'},
        {test: /\.(gif|png|jpg|woff|svg|eot|ttf)\??.*$/, loader:  "url-loader?limit=100&name=resource/[name].[ext]"}
                ]
    },
    resolve: {
      alias:{
        util            : __dirname + '/src/util',
        node_modules    : __dirname + '/node_modules',
        page            : __dirname + '/src/page',
        service         : __dirname + '/src/service',
        image           : __dirname + '/src/image',

      }
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
            //HTML模板的处理
            new HtmlWebpackPlugin(getHtmlConfig("index" , "首页")),
            new HtmlWebpackPlugin(getHtmlConfig("list" , "商品列表")),
            new HtmlWebpackPlugin(getHtmlConfig("cart" , "购物车")),
            new HtmlWebpackPlugin(getHtmlConfig("order-confirm" , "订单确认")),
            new HtmlWebpackPlugin(getHtmlConfig("order-list" , "订单列表")),
            new HtmlWebpackPlugin(getHtmlConfig("order-detail" , "订单详情")),
            new HtmlWebpackPlugin(getHtmlConfig("detail" , "商品详情页")),
            new HtmlWebpackPlugin(getHtmlConfig("user-login", "用户登录")),
            new HtmlWebpackPlugin(getHtmlConfig("user-register", "用户注册")),
            new HtmlWebpackPlugin(getHtmlConfig("user-pass-reset", "找回密码")),
            new HtmlWebpackPlugin(getHtmlConfig("user-pass-update", "修改密码")),
            new HtmlWebpackPlugin(getHtmlConfig("user-center", "个人中心")),
            new HtmlWebpackPlugin(getHtmlConfig("user-center-update", "修改个人信息")),
            new HtmlWebpackPlugin(getHtmlConfig("result", "操作结果")),
             
    ]
};
if( 'dev' === WEBPACK_ENV){
    config.entry.common.push("webpack-dev-server/client?http://localhost:8089/");
}
module.exports = config;

