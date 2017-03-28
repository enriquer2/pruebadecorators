'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _dec3, _dec4, _dec5, _class, _desc, _value, _class2, _descriptor, _descriptor2;

var _decor = require('./decor');

function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
        enumerable: descriptor.enumerable,
        configurable: descriptor.configurable,
        writable: descriptor.writable,
        value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
        desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
        return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
        Object['define' + 'Property'](target, property, desc);
        desc = null;
    }

    return desc;
}

function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

var Foo = (_dec = (0, _decor.clase)('Foo'), _dec2 = (0, _decor.propiedad)('id'), _dec3 = (0, _decor.propiedad)('telefono'), _dec4 = (0, _decor.metodo)('change'), _dec5 = (0, _decor.metodo)('remove'), _dec(_class = (_class2 = function () {
    function Foo() {
        _classCallCheck(this, Foo);

        _initDefineProp(this, 'id', _descriptor, this);

        _initDefineProp(this, 'telefono', _descriptor2, this);
    }

    _createClass(Foo, [{
        key: 'changeFoo',
        value: function changeFoo(name) {
            this.name = name;
        }
    }, {
        key: 'removeFoo',
        value: function removeFoo(type) {
            this.type = type;
        }
    }]);

    return Foo;
}(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'id', [_dec2], {
    enumerable: true,
    initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'telefono', [_dec3], {
    enumerable: true,
    initializer: null
}), _applyDecoratedDescriptor(_class2.prototype, 'changeFoo', [_dec4], Object.getOwnPropertyDescriptor(_class2.prototype, 'changeFoo'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'removeFoo', [_dec5], Object.getOwnPropertyDescriptor(_class2.prototype, 'removeFoo'), _class2.prototype)), _class2)) || _class);


var instance = new Foo();
console.log('funciona?');