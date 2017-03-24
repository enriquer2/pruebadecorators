'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _class, _desc, _value, _class2, _dec3, _desc2, _value2, _class3, _dec4, _desc3, _value3, _class4;

var _decorator = require('./decorator1');

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

var Client = (_dec = (0, _decorator.deco)('soy una clase'), _dec2 = (0, _decorator.change)('soy un metodo'), _dec(_class = (_class2 = function () {
    function Client(nombre) {
        _classCallCheck(this, Client);

        this.nombre = nombre;
    }
    /*
    get nombre() { return nombre
    
    @nom('soy un atributo ')
    //nombre;
    */


    _createClass(Client, [{
        key: 'changeNombre',
        value: function changeNombre(nuevo) {
            this.nombre = nuevo;
        }
    }]);

    return Client;
}(), (_applyDecoratedDescriptor(_class2.prototype, 'changeNombre', [_dec2], Object.getOwnPropertyDescriptor(_class2.prototype, 'changeNombre'), _class2.prototype)), _class2)) || _class);


var instance = new Client('pepe');
console.log(instance);
/////////////////////////////////////////////////////////////////////////////////
var Cat = (_dec3 = (0, _decorator.readonly)('soy un gato'), (_class3 = function () {
    function Cat() {
        _classCallCheck(this, Cat);
    }

    _createClass(Cat, [{
        key: 'meow',
        value: function meow() {
            return this.name + ' says Meow';
        }
    }]);

    return Cat;
}(), (_applyDecoratedDescriptor(_class3.prototype, 'meow', [_dec3], Object.getOwnPropertyDescriptor(_class3.prototype, 'meow'), _class3.prototype)), _class3));
;

var gato = new Cat('pedro');
console.log(gato);

/////////////////////////////////////////////////////////////////////////////////
var Person = (_dec4 = (0, _decorator.timer)('tiempoooooooooooooooooooooooooooooo'), (_class4 = function () {
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
}(), (_applyDecoratedDescriptor(_class4.prototype, 'grow', [_dec4], Object.getOwnPropertyDescriptor(_class4.prototype, 'grow'), _class4.prototype)), _class4));


var p = new Person('Enrique');
console.log(p.greeting());
p.grow(99);