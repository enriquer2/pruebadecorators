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
        target.meta.entity = target.meta.entity || {};
        target.meta.entity.name = params[0]; //revisar que name esta creado o no?
        console.log('Second target', target);
        console.log('Second key', key);
        console.log('Second descriptor', descriptor);
        //target.meta.entity.name.decorator = params[0];
    }
}



export const metodo = function(...params) {
    return function(target, key, descriptor) {
        console.log('Third');
        target.constructor.meta = target.constructor.meta || {};
        target.constructor.meta.methods = target.constructor.meta.methods || {};
        target.constructor.meta.methods.name = [key];
        target.constructor.meta.methods.name.decorator = params[0];
        //        console.log(params[0]);
        //        console.log('target', target);
        //        console.log('key', key);
        //        console.log('descriptor', descriptor);
        //        target.meta.metodos.lista.push(params);
        //        target.meta.metodos.lista = params[0];

    }
}

export const propiedad = function(...params) {
    return function(target, key, descriptor) {
        //        console.log('Fourth');
        target.constructor.meta = target.constructor.meta || {};
        target.constructor.meta.properties = {};
        //        console.log('target', target);
        //        console.log('key', key);
        //        console.log('descriptor', descriptor);
        target.constructor.meta.properties.name = [key];
        target.constructor.meta.properties.name.decorator = 'propiedad';
    }
}