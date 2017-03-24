'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _decorator = require('./decorator2');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Client = function () {
    function Client(nombre) {
        _classCallCheck(this, Client);

        this._nombre = nombre;
    }

    _createClass(Client, [{
        key: 'nombre',
        get: function get() {
            return this._nombre;
        },
        set: function set(newNombre) {
            this._nombre = newNombre;
        }

        /*
            @rator1('soy un metodo')
            changeNombre(nuevo) {
                this.nombre = nuevo;
            }
        */

    }]);

    return Client;
}();

var instance = new Client('pepe');
console.log(instance);
console.log(instance.nombre);

instance.nombre = 'juan';
console.log(instance.nombre);