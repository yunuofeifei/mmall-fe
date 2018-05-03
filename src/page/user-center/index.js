/*
* @Author: sophie
* @Date:   2018-05-02 12:48:33
* @Last Modified by:   sophie
* @Last Modified time: 2018-05-02 14:47:35
*/
require('./index.css');
require('page/common/nav/index.js');
require('page/common/header/index.js');
var navSide       = require('page/common/nav-side/index.js');
var _mm           = require('util/mm.js');
var templateIndex = require('./index.string');
var _user         = require('service/user-service.js');

// 配置逻辑部分
var para = {
    init: function(){
        this.onLoad();
    },
    onLoad: function(){
        // 初始化左侧菜单
        navSide.init({
            name : 'user-center'
        });
        // 加载用户信息
        this.loadUserInfo();
    },
    // 加载用户信息
    loadUserInfo : function(){
        var userHtml = '';
        _user.getUserInfo(function(res){
            userHtml = _mm.renderHtml(templateIndex, res);
            $('.panel-body').html(userHtml);
        }, function(errMsg){
            _mm.errorTip(errMsg);
        });
    }    
};

$(function(){
    para.init();
});

