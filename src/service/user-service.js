/*
* @Author: sophie
* @Date:   2018-04-26 21:24:18
* @Last Modified by:   sophie
* @Last Modified time: 2018-04-27 10:23:02
*/
'use strict'

var _mm = require('util/mm.js');

var _user = {
    //检查登陆状态
    checkLogin : function(resolve, reject){
    _mm.request({
        url        : _mm.getServerUrl('/user/get_user_info.do'),
        method     : 'POST',
        success    : resolve,
        error      : reject
    });
   },
    //登出
   logout : function(resolve, reject){
    _mm.request({
        url        : _mm.getServerUrl('/user/logout.do'),
        method     : 'POST',
        success    : resolve,
        error      : reject
    });
   }
};
module.exports = _user;
