import { clase, metodo, propiedad } from './decorator'

@clase('Foo')
class Foo {

    @propiedad('id')
    id;
    @propiedad('telefono')
    telefono;

    @metodo('change')
    changeFoo(name) {
        this.name = name;
    }
    @metodo('remove')
    removeFoo(type) {
        this.type = type;
    }
}

let instance = new Foo();
console.log('funciona?');