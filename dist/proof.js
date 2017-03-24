'use strict';

var o = {};
// Example of an object property added with defineProperty with a data property descriptor
Object.defineProperty(o, 'a', {
    value: 37,
    writable: true,
    enumerable: true,
    configurable: true
});
// 'a' property exists in the o object and its value is 37

// Example of an object property added with defineProperty with an accessor property descriptor
var bValue = 38;
Object.defineProperty(o, 'b', {
    get: function get() {
        return bValue;
    },
    set: function set(newValue) {
        bValue = newValue;
    },
    enumerable: true,
    configurable: true
});
o.b; // 38
// 'b' property exists in the o object and its value is 38
// The value of o.b is now always identical to bValue, unless o.b is redefined

/*
console.log(o.a);
o.a = 230;
console.log(o.a);


// You cannot try to mix both:
Object.defineProperty(o, 'conflict', {
    value: 0x9f91102,
    get: function() { return 0xdeadbeef; }
});
// throws a TypeError: value appears only in data descriptors, get appears only in accessor descriptors
*/

//si tiene el atributo de configuracion en false no se puede cambiar
//writable a false -> sin capacidad de escritura = no puede ser reasignada
var p = {};
Object.defineProperty(p, 'a', { value: 1, enumerable: true });
Object.defineProperty(p, 'b', { value: 2, enumerable: false });
Object.defineProperty(p, 'c', { value: 3 }); // enumerable defaults to false
p.d = 4; // enumerable defaults to true when creating a property by setting it

for (var i in p) {
    console.log(i);
}
// logs 'a' and 'd' (in undefined order)

Object.keys(p); // ['a', 'd']       poner en depurador

p.propertyIsEnumerable('a'); // true        poner en depurador
p.propertyIsEnumerable('b'); // false       poner en depurador
p.propertyIsEnumerable('c'); // false       poner en depurador
console.log('hola');

var op = {};
Object.defineProperty(op, 'a', {
    get: function get() {
        return 1;
    },
    configurable: false //ESTO A TRUE HUBIERA FUNCIONADO TODO
});

/*
Object.defineProperty(op, 'a', { configurable: true }); // arroja TypeError
Object.defineProperty(op, 'a', { enumerable: true }); //  arroja  TypeError
Object.defineProperty(op, 'a', { set: function() {} }); //  arroja  TypeError (set estaba definido como undefined)
Object.defineProperty(op, 'a', { get: function() { return 1; } }); // arroja TypeError (incluso aunque los get hacen lo mismo)
Object.defineProperty(op, 'a', { value: 12 }); // arroja TypeError
*/

console.log(op.a); // logs 1
/*
delete op.a; // No hace nada        DA ERROR: TypeError
*/
console.log(op.a); // logs 1
console.log('hola2');

var ko = {};

ko.a = 1;
// es equivalente a :
Object.defineProperty(ko, 'a', {
    value: 1,
    writable: true,
    configurable: true,
    enumerable: true
});

// Sin embargo,
Object.defineProperty(ko, 'a', { value: 1 });
// es equivalente a :
Object.defineProperty(ko, 'a', {
    value: 1,
    writable: false,
    configurable: false,
    enumerable: false
});
console.log('hola3');

function Archiver() {
    var temperature = null;
    var archive = [];

    Object.defineProperty(this, 'temperature', {
        get: function get() {
            console.log('get!');
            return temperature;
        },
        set: function set(value) {
            temperature = value;
            archive.push({ val: temperature });
        }
    });

    this.getArchive = function () {
        return archive;
    };
}

var arc = new Archiver();
arc.temperature; // 'get!'
arc.temperature = 11;
arc.temperature = 13;
arc.getArchive(); // [{ val: 11 }, { val: 13 }]
console.log('hola4');

var pattern = {
    get: function get() {
        return 'I always return this string, whatever you have assigned';
    },
    set: function set() {
        this.myname = 'this is my name string';
    }
};

function TestDefineSetAndGet() {
    Object.defineProperty(this, 'myproperty', pattern);
}

var instance = new TestDefineSetAndGet();
instance.myproperty = 'test';
console.log(instance.myproperty); // I always return this string, whatever you have assigned

console.log(instance.myname); // this is my name string
console.log('hola5');