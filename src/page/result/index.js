/*
* @Author: sophie
* @Date:   2018-04-29 20:20:51
* @Last Modified by:   sophie
* @Last Modified time: 2018-04-29 21:41:36
*/
'use strict'
require('./index.css');
require('page/common/nav-simple/index.js');
var _mm = require('util/mm.js');

$(function(){
    var type = _mm.getUrlParam('type') || 'default',
    $element = $('.' + type + '-success');
    // 显示对应的提示元素
    $element.show();
});