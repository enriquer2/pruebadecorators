'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var META = Symbol('meta');
var METHODS = Symbol('METHODS');

function createMeta(entity) {
    return entity.constructor[META] = entity.constructor[META] || {};
}

function createMethod(entity, method, value) {
    var meta = createMeta(entity);
    var _method = meta[METHODS] = meta[METHODS] || {};
    _method[method] = _defineProperty({}, decorator, value);
}

/*
class Client {
    @dede
    write() {}
    read() {}
}

/*
createMethod(Foo, "write", { id: 1 });
createMethod(Foo, "read", { id: 33 });

*/