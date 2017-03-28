const META = Symbol('meta');
const METHODS = Symbol('METHODS');

function createMeta(entity) {
    return entity.constructor[META] = entity.constructor[META] || {};
}

function createMethod(entity, method, value) {
    let meta = createMeta(entity);
    let _method = (meta[METHODS] = meta[METHODS] || {});
    _method[method] = {
        [decorator]: value };
}



export const clase = function(...params) {
    return function(target, key, descriptor) {
        console.log('Second');
        target.meta = target.meta || {};
        target.meta.clase = {};
        target.meta.clase.name = params[0]; //revisar que name esta creado o no?
    }
}








class Foo {
    @
    write() {}
    read() {}
}

createMethod(Foo, "write", { id: 1 });
createMethod(Foo, "read", { id: 33 });