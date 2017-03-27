'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
/*
    newConstructor.prototype = Object.create(target.prototype);
    newConstructor.prototype.constructor = target;
    return newConstructor;
*/

var sealed = exports.sealed = function sealed() {
    for (var _len = arguments.length, params = Array(_len), _key = 0; _key < _len; _key++) {
        params[_key] = arguments[_key];
    }

    //... convierte en array
    return function (target, key, descriptor) {
        console.log('Sealing the constructor: ' + target);
        console.log(params[0]);
        console.log(target);
        target.meta = { a: 'b' };
        console.log(key);
        console.log(descriptor);
    };
};
var logger = exports.logger = function logger() {
    for (var _len2 = arguments.length, params = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        params[_key2] = arguments[_key2];
    }

    //... convierte en array
    return function (target, key, descriptor) {
        console.log('Creating new instance.');
        var old = descriptor;
        //        let old = descriptor.get;
        descriptor.get = function () {
            console.log('Llega hasta aqui');
            return old.call(this) || params;
        };
    };
};
var writable = exports.writable = function writable() {
    for (var _len3 = arguments.length, params = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        params[_key3] = arguments[_key3];
    }

    //... convierte en array
    return function (target, key, descriptor) {
        console.log('Setting ' + key + '.');
        descriptor.writable = isWritable;
        console.log('Funciona');
        target.constructor["BBDD"] = { table: params };
        console.log('Esperemos que si');
    };
};