/*
* @Author: sophie
* @Date:   2018-04-26 21:24:18
* @Last Modified by:   sophie
* @Last Modified time: 2018-05-05 22:06:43
*/
'use strict'

var _mm = require('util/mm.js');

var _product = {
    // 获取商品详细信息
    getProductDetail: function(productId, resolve, reject){
    _mm.request({
        url        : _mm.getServerUrl('/product/detail.do'),
        data       : {
            productId : productId
        },        
        method     : 'POST',
        success    : resolve,
        error      : reject
    });
   },
    //获取商品列表
    getProductList : function(listParam, resolve, reject){
    _mm.request({
        url        : _mm.getServerUrl('/product/list.do'),
        data       : listParam,
        method     : 'POST',
        success    : resolve,
        error      : reject
    });
   }
};
module.exports = _product;
