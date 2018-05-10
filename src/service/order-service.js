/*
* @Author: sophie
* @Date:   2018-05-08 09:27:02
* @Last Modified by:   sophie
* @Last Modified time: 2018-05-10 10:13:22
*/
'use strict'
var _mm = require('util/mm.js');

var _order = {
    // 加载商品信息
    getProductList: function(resolve, reject){
        _mm.request({
            url     : _mm.getServerUrl('/order/get_order_cart_product.do'),
            success : resolve,
            error   : reject
        })
    },
    // 提交订单
    createOrder:function(orderInfo, resolve, reject){
        _mm.request({
            url     : _mm.getServerUrl('/order/create.do'),
            data    : orderInfo,
            success : resolve,
            error   : reject
        })
    },
    // listParam
    getOrderList :function(listParam, resolve, reject){
        _mm.request({
            url     : _mm.getServerUrl('/order/list.do'),
            data    : listParam,
            success : resolve,
            error   : reject
        })
    },
    // 获取订单详情
    getOrderDetail: function(orderNumber, resolve, reject){
        _mm.request({
            url     : _mm.getServerUrl('/order/detail.do'),
            data    : {
                orderNo  : orderNumber
            },
            success : resolve,
            error   : reject
        })
    },
    // 取消订单
    cancelOrder: function(orderNumber, resolve, reject){
        _mm.request({
            url     : _mm.getServerUrl('/order/cancel.do'),
            data    : {
                orderNo  : orderNumber
            },
            success : resolve,
            error   : reject
        });
    }
};

module.exports = _order;