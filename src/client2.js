import { rator1 } from './decorator2';


class Client {
    constructor(nombre) {
        this._nombre = nombre;
    }

    get nombre() {
        return this._nombre;
    }

    set nombre(newNombre) {
        this._nombre = newNombre;
    }

    /*
        @rator1('soy un metodo')
        changeNombre(nuevo) {
            this.nombre = nuevo;
        }
    */
}

let instance = new Client('pepe');
console.log(instance);
console.log(instance.nombre);

instance.nombre = 'juan';
console.log(instance.nombre);