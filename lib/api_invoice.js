'use strict';

var path = require('path');
var fs = require('fs');

var formstream = require('formstream');
var util = require('./util');
var wrapper = util.wrapper;
var postJSON = util.postJSON;
var make = util.make;


/**
 * 设置(获取) 商户联系方式
 * https://api.weixin.qq.com/card/invoice/setbizattr?action=set_contact&access_token={access_token}
 */
make(exports, 'setbizattr', function (phone, time_out, action, callback) {

    var actionParam = action || 'get_contact';
    var url = this.endpoint + '/card/invoice/setbizattr?action=' + actionParam + '&access_token=' + this.token.accessToken;
    var contact = {};
    if (actionParam == 'set_contact') {
        'contact' = {
            contact: {
                'phone': phone,
                'time_out': time_out,
            }
        };
    }
    this.request(url, postJSON(contact), wrapper(callback));
});

/**
 * 查询授权完成状态
 * https://api.weixin.qq.com/card/invoice/getauthdata?access_token={access_token}
 */
make(exports, 'getInvoiceAuthdData', function (order_id, s_pappid, callback) {

    var url = this.endpoint + '/card/invoice/getauthdata?access_token=' + this.token.accessToken;
    var param = {
        'order_id': order_id,
        's_pappid': s_pappid,
    };

    this.request(url, postJSON(param), wrapper(callback));
});


/**
 * 统一开票接口-开具蓝票
 * https://api.weixin.qq.com/card/invoice/makeoutinvoice?access_token={access_token}
 */
make(exports, 'makeoutinvoice', function (param, callback) {
    var url = this.endpoint + '/card/invoice/makeoutinvoice?access_token=' + this.token.accessToken; 
    this.request(url, postJSON(param), wrapper(callback));
});