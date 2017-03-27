"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var deco = exports.deco = function deco() {
    for (var _len = arguments.length, params = Array(_len), _key = 0; _key < _len; _key++) {
        params[_key] = arguments[_key];
    }

    //... convierte en array
    return function (target, key, descriptor) {
        console.log(params[0]);
        console.log(target);
        target.meta = { a: 'b' };
        console.log(key);
        console.log(descriptor);
    };
};
var nom = exports.nom = function nom() {
    for (var _len2 = arguments.length, params = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        params[_key2] = arguments[_key2];
    }

    //... convierte en array
    return function (target, key, descriptor) {
        var old = descriptor.get;
        descriptor.get = function () {
            return old.call(this) || params;
        };
    };
};
var change = exports.change = function change() {
    for (var _len3 = arguments.length, params = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        params[_key3] = arguments[_key3];
    }

    //... convierte en array
    return function (target, key, descriptor) {

        target.constructor["BBDD"] = { table: params };
    };
};
/////////////////////////////////////////////////////////////////////////////////////
var readonly = exports.readonly = function readonly() {
    for (var _len4 = arguments.length, params = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        params[_key4] = arguments[_key4];
    }

    return function (target, key, descriptor) {
        console.log(params[0]);
        console.log(target);
        console.log(key);
        console.log(descriptor);
        descriptor.writable = false;
        console.log(descriptor);
        return descriptor;
    };
};
///////////////////////////////////////////////////////////////////////////////////
var timer = exports.timer = function timer() {
    for (var _len5 = arguments.length, params = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        params[_key5] = arguments[_key5];
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

//si es una clase, meter en target.meta
//si no -> target.constructor.meta