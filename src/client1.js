import { deco } from './decorator1';
import { nom } from './decorator1';
import { change } from './decorator1';
import { readonly } from './decorator1';

@deco('soy una clase')
class Client {
    constructor(nombre) {
            this.nombre = nombre;
        }
        /*
        get nombre() { return nombre
        
    @nom('soy un atributo ')
        //nombre;
        */
    @change('soy un metodo')
    changeNombre(nuevo) {
        this.nombre = nuevo;
    }

}

let instance = new Client('pepe');
console.log(instance);
/////////////////////////////////////////////////////////////////////////////////
class Cat {
    @readonly('soy un gato')
    meow() {
        return `${this.name} says Meow`;
    }
};

let gato = new Cat('pedro');
console.log(gato);

/////////////////////////////////////////////////////////////////////////////////
import { timer } from './decorator1';
class Person {
    constructor(first = '', last = '') {
        this.first = first;
        this.last = last;
        this.age = 0;
    }

    greeting() {
        return `Hi, I'm ${this.first} ${this.last}. Nice`
    }

    @timer('tiempoooooooooooooooooooooooooooooo')
    grow(age) {
        for (let i = 0; i < age; i++) {
            this.age = i;
        }
    }
}

let p = new Person('Enrique')
console.log(p.greeting())
p.grow(99);