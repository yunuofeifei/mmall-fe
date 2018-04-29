/*
* @Author: sophie
* @Date:   2018-04-27 10:45:21
* @Last Modified by:   sophie
* @Last Modified time: 2018-04-29 10:54:17
*/
'use strict'
var _mm = require('util/mm.js');
var _cart = {
    //获取购物车数量
   getCartCount : function(resolve, reject){
    _mm.request({
        url        : _mm.getServerUrl('/cart/get_cart_procuct_count.do'),
        success    : resolve,
        error      : reject
    });
   }
};
module.exports = _cart;