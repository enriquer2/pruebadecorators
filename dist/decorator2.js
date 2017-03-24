"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var rator1 = exports.rator1 = function rator1() {
    for (var _len = arguments.length, params = Array(_len), _key = 0; _key < _len; _key++) {
        params[_key] = arguments[_key];
    }

    //... convierte en array
    return function (target, key, descriptor) {
        console.log(params[0]);
        console.log(target);
        //        target.meta = { alfa: 'nooooo' };
        console.log(key);
        console.log(descriptor);
    };
};