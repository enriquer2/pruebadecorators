export const table = function(...params) { //... convierte en array
    return function(target, key, descriptor) {
        console.log(`Creating new instance.`);
        //guardar el nombre de la tabla. Comprobar si ya esta creada la tabla y sino crear un objeto vacio. Luego asignar a name el nombre que nos pasa
        target.table = target.table || {};
        //target.table -> crea la tabla    pero no se puede hacer target.table.name porque asume que existe table e intenta crear name, pero PETA
        target.table.name = params[0];
        /*                                          Para guardar una funcion llamada demo con un parametro que pone 'hola'
        target.demo = function() {
                console.log('hola');
        }
        */

    }
}

export const clase = function(...params) {
    return function(target, key, descriptor) {
        console.log('Second');
        target.meta = target.meta || {};
        target.meta.clase = {};
        //        target.meta.clase.name = params[0]; //revisar que name esta creado o no?
    }
}

export const metodo = function(...params) {
    return function(target, key, descriptor) {
        console.log('Third');
        target.meta = target.meta || {};
        target.meta.metodos = {};
        target.meta.metodos = { lista: params };

    }
}

export const propiedad = function(...params) {
    return function(target, key, descriptor) {
        console.log('Fourth');
        target.meta = target.meta || {};
        target.meta.propiedades = {};
        target.meta.propiedades = { lista: params }
    }
}