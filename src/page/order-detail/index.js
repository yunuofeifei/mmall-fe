/*
* @Author: sophie
* @Date:   2018-05-02 12:48:33
* @Last Modified by:   sophie
* @Last Modified time: 2018-05-09 22:01:43
*/
'use strict'
require('./index.css');
require('page/common/nav/index.js');
require('page/common/header/index.js');
var navSide       = require('page/common/nav-side/index.js');
var _mm           = require('util/mm.js');
var templateIndex = require('./index.string');
var _order        = require('service/order-service.js');

// 配置逻辑部分
var para = {
    data: {
        orderNumber : _mm.getUrlParam('orderNumber')
    },
    init: function(){
        this.onLoad();
        this.bindEvent();
    },
    onLoad: function(){
        // 初始化左侧菜单
        navSide.init({
            name : 'order-list'
        });
         this.loadDetail();
    },
    bindEvent: function(){
        var _this = this;
        $(document).on('click', '.order-cancel', function(){
            if(window.confirm('确实要取消该订单吗？')){
                 _order.cancelOrder(_this.data.orderNumber, function(res){
                    _mm.successTip('该订单取消成功');
                    _this.loadDetail();
                }, function(errMsg){
                    _mm.errorTip(errMsg);
                });
            };
           
        });
    },
    // 加载订单列表
    loadDetail: function(){
        var _this         = this,
            orderDetailHtml = '',
            $content      = $('.content');
        $content.html('<div class="loading"></div>');
        _order.getOrderDetail(this.data.orderNumber, function(res){
            _this.dataFilter(res);
            // 渲染html
            orderDetailHtml = _mm.renderHtml(templateIndex, res);
              $content.html(orderDetailHtml);
              }, function(errMsg){
            $content.html('<p class="err-tip">' + errMsg + '</p>');
        });
    },
    // 数据适配
    dataFilter: function(data){
        data.needPay      = (data.status == 10);
        data.isCancelable = (data.status == 10);
    }
};

$(function(){
    para.init();
});

