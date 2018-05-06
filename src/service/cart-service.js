/*
* @Author: sophie
* @Date:   2018-04-27 10:45:21
* @Last Modified by:   sophie
* @Last Modified time: 2018-05-06 10:47:33
*/
'use strict'
var _mm = require('util/mm.js');
var _cart = {
    // 添加到购物车
    addToCart:  function(productInfo, resolve, reject){
    _mm.request({
        url        : _mm.getServerUrl('/cart/add.do'),
        data       : productInfo,
        success    : resolve,
        error      : reject
    });
   },
    //获取购物车数量
   getCartCount : function(resolve, reject){
    _mm.request({
        url        : _mm.getServerUrl('/cart/get_cart_product_count.do'),
        success    : resolve,
        error      : reject
    });
   }
};
module.exports = _cart;