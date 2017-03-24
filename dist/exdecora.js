"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var timer = exports.timer = function timer() {
    for (var _len = arguments.length, params = Array(_len), _key = 0; _key < _len; _key++) {
        params[_key] = arguments[_key];
    }

    return function (target, name, descriptor) {
        var fn = descriptor.value;
        descriptor.value = function () {
            console.time(name);
            var result = fn.apply(this, arguments);
            console.timeEnd(name);
        };
        Object.defineProperty(target, name, descriptor);
    };
};