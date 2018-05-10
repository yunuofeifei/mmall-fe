/*
* @Author: sophie
* @Date:   2018-05-02 12:48:33
* @Last Modified by:   sophie
* @Last Modified time: 2018-05-10 10:48:02
*/
'use strict'
require('./index.css');
require('page/common/nav/index.js');
require('page/common/header/index.js');
var _mm           = require('util/mm.js');
var templateIndex = require('./index.string');
var _payment      = require('service/payment-service.js');

// 配置逻辑部分
var para = {
    data: {
        orderNumber : _mm.getUrlParam('orderNumber')
    },
    init: function(){
        this.onLoad();
    },
    onLoad: function(){
        this.loadPaymentInfo();
    },
      // 加载订单列表
    loadPaymentInfo: function(){
        var _this         = this,
            paymentHtml = '',
            $pageWrap      = $('.page-wrap');
        $pageWrap.html('<div class="loading"></div>');
        _payment.getPaymentInfo(this.data.orderNumber, function(res){
            // 渲染html
            paymentHtml = _mm.renderHtml(templateIndex, res);
              $pageWrap.html(paymentHtml);
              _this.listenOrderStatus();
              }, function(errMsg){
            $pageWrap.html('<p class="err-tip">' + errMsg + '</p>');
        });
    },
    // 监听订单状态
    listenOrderStatus: function(){
        var _this = this;
        this.paymentTimer = window.setInterval(function(){
            _payment.getPaymentStatus(_this.data.orderNumber, function(res){
                if(res == true){
                    window.location.href 
                        = './result.html?type=payment&orderNumber=' + _this.data.orderNumber;
                }
            });
        }, 5e3);
    }
};

$(function(){
    para.init();
});

