/*
    newConstructor.prototype = Object.create(target.prototype);
    newConstructor.prototype.constructor = target;
    return newConstructor;
*/

export const sealed = function(...params) { //... convierte en array
    return function(target, key, descriptor) {
        console.log(`Sealing the constructor: ${target}`);
        console.log(params[0]);
        console.log(target);
        target.meta = { a: 'b' };
        console.log(key);
        console.log(descriptor);
    };
}
export const logger = function(...params) { //... convierte en array
    return function(target, key, descriptor) {
        console.log(`Creating new instance.`);
        let old = descriptor;
        //        let old = descriptor.get;
        descriptor.get = function() {
            console.log('Llega hasta aqui');
            return old.call(this) || params;
        }
    };
}
export const writable = function(...params) { //... convierte en array
    return function(target, key, descriptor) {
        console.log(`Setting ${key}.`);
        descriptor.writable = isWritable;
        console.log('Funciona');
        target.constructor["BBDD"] = { table: params }
        console.log('Esperemos que si');
    };
}