'use strict';

var path = require('path');
var fs = require('fs');

var formstream = require('formstream');
var util = require('./util');
var wrapper = util.wrapper;
var postJSON = util.postJSON;
var make = util.make;



make(exports, 'setbizattr', function (phone, time_out, action, callback) {

    var actionParam = action || 'get_contact';
    var url = this.endpoint + '/card/invoice/setbizattr?action=' + actionParam + '&access_token=' + this.token.accessToken;
    var contact = {};
    if (actionParam == 'set_contact') {
        contact = {
            'phone': phone,
            'time_out': time_out,
        };
    }
    this.request(url, postJSON(contact), wrapper(callback));
});

