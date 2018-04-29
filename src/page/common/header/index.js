/*
* @Author: sophie
* @Date:   2018-04-27 15:04:48
* @Last Modified by:   sophie
* @Last Modified time: 2018-04-27 16:23:25
*/
'use strict'
require('./index.css');
var _mm   = require('util/mm.js');
//通用页面头部
var header = {
    init : function(){
        this.onLoad();
        this.bindEvent();
    },
    onLoad: function(){
        var keyword = _mm.getUrlParam('keyword');
        //keyword存在，则回填输入框
        if(keyword){
            $('#search-input').val(keyword);
        }
    },
    bindEvent : function(){
        var _this = this;
        //点击搜素按钮以后，做搜索提交
       $('#search-btn').click(function(){
            _this.searchSubmit();
       });
       //输入回车后做搜索提交
       $('#search-input').keyup(function(e){
        //13是回车键的keyword
        if(e.keyCode === 13){
            _this.searchSubmit();
        }
       });
    },
     //搜索的提交
    searchSubmit : function(){
       var keyword = $.trim($('#search-input').val());
       //如果提交的时候有keyword，正常条状到list页
       if(keyword){
        window.location.href = './list.html?keyword=' + keyword;
        }
        //如果keyword为空，直接返回首页
         else {
            _mm.goHome();
        }
    }
};

header.init();