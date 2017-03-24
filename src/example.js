import { timer } from './exdecora';
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