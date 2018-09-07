'use strict';

var path = require('path');
var fs = require('fs');

var formstream = require('formstream');
var util = require('./util');
var wrapper = util.wrapper;
var postJSON = util.postJSON;
var make = util.make;


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



/**
 * 拒绝开票
 * https://api.weixin.qq.com/card/invoice/rejectinsert?access_token={access_token}
 */
make(exports, 'rejectinsert', function (param, callback) {
    var url = this.endpoint + '/card/invoice/rejectinsert?access_token=' + this.token.accessToken;
    this.request(url, postJSON(param), wrapper(callback));
});

/**
 * 统一开票接口-查询已开发票
 * https://api.weixin.qq.com/card/invoice/queryinvoceinfo?access_token={access_token}
 * 
 */
make(exports, 'queryinvoceinfo', function (param, callback) {
    var url = this.endpoint + '/card/invoice/queryinvoceinfo?access_token=' + this.token.accessToken;
    this.request(url, postJSON(param), wrapper(callback));
});







/***************************************************************************************************************************************** */
/***************************************************************************************************************************************** */
/*******************************************以下为一次性接口只有在商户信息变更才调用********************************************************** */
/***************************************************************************************************************************************** */
/***************************************************************************************************************************************** */

/**
 * 设置(获取) 商户联系方式
 * https://api.weixin.qq.com/card/invoice/setbizattr?action=set_contact&access_token={access_token}
 */
make(exports, 'setbizattr', function (phone, time_out, action, callback) {

    var actionParam = action || 'get_contact';
    var url = this.endpoint + '/card/invoice/setbizattr?action=' + actionParam + '&access_token=' + this.token.accessToken;
    var contact = {};
    if (actionParam == 'set_contact') {
        contact = {
            'contact': {
                'phone': phone,
                'time_out': time_out,
            }
        };
    }
    this.request(url, postJSON(contact), wrapper(callback));
});

/**
 * 关联商户号与开票平台
 * https://api.weixin.qq.com/card/invoice/setbizattr?action=set_pay_mch&access_token={access_token}
 */
make(exports, 'setpaymch', function (param, callback) {

    var url = this.endpoint + '/card/invoice/setbizattr?action=set_pay_mch&access_token=' + this.token.accessToken;

    this.request(url, postJSON(param), wrapper(callback));
});


/**
 * 查询商户号与开票平台关联情况
 * https://api.weixin.qq.com/card/invoice/setbizattr?action=get_pay_mch&access_token={access_token}
 */
make(exports, 'getpaymch', function (callback) {

    var url = this.endpoint + '/card/invoice/setbizattr?action=get_pay_mch&access_token=' + this.token.accessToken;

    this.request(url, postJSON({}), wrapper(callback));
});