/*
* @Author: sophie
* @Date:   2018-04-21 10:58:05
* @Last Modified by:   sophie
* @Last Modified time: 2018-05-03 18:52:54
*/


"use strict"
require('./index.css');
require('page/common/nav/index.js');
require('page/common/header/index.js');
require('util/slider/index.js');
var navSide             = require('page/common/nav-side/index.js');
var templateBanner      = require('./banner.string');
var _mm                 = require('util/mm.js');

// $(function() {
//     // 渲染banner的html
//     var bannerHtml      = _mm.renderHtml(templateBanner);
//     $('.banner-con').html(bannerHtml);
//     // 初始化banner
//     var $slider         = $('.banner').unslider({
//         dots: true, 
//     });
//     // 前一张和后一张的事件绑定
//     $('.banner-con .banner-arrow').click(function(){
//         var forward = $(this).hasClass('prew') ? 'prew' : 'next';
//         console.log(forward);
//         $slider.data('unslider')[forward]();
//     });
// });
$(function() {
    // 渲染banner的html
    var bannerHtml  = _mm.renderHtml(templateBanner);
    $('.banner-con').html(bannerHtml);
    // 初始化banner
    var $slider     = $('.banner').unslider({
        dots: true
    });
    // 前一张和后一张操作的事件绑定
    $('.banner-con .banner-arrow').click(function(){
        var forward = $(this).hasClass('prev') ? 'prev' : 'next';
        $slider.data('unslider')[forward]();
    });
});
