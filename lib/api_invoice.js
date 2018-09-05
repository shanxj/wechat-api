'use strict';

var path = require('path');
var fs = require('fs');

var formstream = require('formstream');
var util = require('./util');
var wrapper = util.wrapper;
var postJSON = util.postJSON;
var make = util.make;



// exports.getAuthurl = function (s_pappid, order_id, money, source, redirect_url, type, callback) {
//     console.log('getAuthurl');
//     this.preRequestWxCardApi(this._getAuthurl, arguments);
// };


// exports._getAuthurl = function (s_pappid, order_id, money, source, redirect_url, type, callback) {
//     var apiTicket = this.wxCardTicket.ticket;
//     var that = this;
//     var url = that.mpPrefix + '/card/invoice/getauthurl?access_token=' + that.token.accessToken;
//     var timestamp = this.createTimestamp();
//     var data = {
//         's_pappid': s_pappid,
//         'order_id': order_id,
//         'money': money,
//         'timestamp': timestamp,
//         'source': source || 'web',
//         'redirect_url': redirect_url,
//         'ticket': apiTicket,
//         'type': type,
//     };
//     this.request(url, postJSON(data), wrapper(callback));
// }


/*!
 * 生成时间戳
 */
var createTimestamp = function () {
    return parseInt(new Date().getTime() / 1000, 0) + '';
};