'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _desc, _value, _class;

var _exdecora = require('./exdecora');

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

var Person = (_dec = (0, _exdecora.timer)('tiempoooooooooooooooooooooooooooooo'), (_class = function () {
    function Person() {
        var first = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
        var last = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

        _classCallCheck(this, Person);

        this.first = first;
        this.last = last;
        this.age = 0;
    }

    _createClass(Person, [{
        key: 'greeting',
        value: function greeting() {
            return 'Hi, I\'m ' + this.first + ' ' + this.last + '. Nice';
        }
    }, {
        key: 'grow',
        value: function grow(age) {
            for (var i = 0; i < age; i++) {
                this.age = i;
            }
        }
    }]);

    return Person;
}(), (_applyDecoratedDescriptor(_class.prototype, 'grow', [_dec], Object.getOwnPropertyDescriptor(_class.prototype, 'grow'), _class.prototype)), _class));


var p = new Person('Enrique');
console.log(p.greeting());
p.grow(99);