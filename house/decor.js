'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var table = exports.table = function table() {
    for (var _len = arguments.length, params = Array(_len), _key = 0; _key < _len; _key++) {
        params[_key] = arguments[_key];
    }

    //... convierte en array
    return function (target, key, descriptor) {
        console.log('Creating new instance.');
        //guardar el nombre de la tabla. Comprobar si ya esta creada la tabla y sino crear un objeto vacio. Luego asignar a name el nombre que nos pasa
        target.table = target.table || {};
        //target.table -> crea la tabla    pero no se puede hacer target.table.name porque asume que existe table e intenta crear name, pero PETA
        target.table.name = params[0];
        /*                                          Para guardar una funcion llamada demo con un parametro que pone 'hola'
        target.demo = function() {
                console.log('hola');
        }
        */
    };
};

var clase = exports.clase = function clase() {
    return function (target, key, descriptor) {
        console.log('Second');
        target.meta = target.meta || {};
        target.meta.clase = {};
        //        target.meta.clase.name = params[0]; //revisar que name esta creado o no?
    };
};

var metodo = exports.metodo = function metodo() {
    for (var _len2 = arguments.length, params = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        params[_key2] = arguments[_key2];
    }

    return function (target, key, descriptor) {
        console.log('Third');
        target.meta = target.meta || {};
        target.meta.metodos = {};
        target.meta.metodos = { lista: params };
    };
};

var propiedad = exports.propiedad = function propiedad() {
    for (var _len3 = arguments.length, params = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        params[_key3] = arguments[_key3];
    }

    return function (target, key, descriptor) {
        console.log('Fourth');
        target.meta = target.meta || {};
        target.meta.propiedades = {};
        target.meta.propiedades = { lista: params };
    };
};