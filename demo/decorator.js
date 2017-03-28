const META = Symbol('meta');
const METHODS = Symbol('METHODS');

function createMeta(entity) {
    return entity.constructor[META] = entity.constructor[META] || {};
}

function createMethod(entity, method, value) {
    let meta = createMeta(entity);
    let _method = (meta[METHODS] = meta[METHODS] || {});
    _method[method] = {
        [decorator]: value
    };
}

class Foo {
    @
    write() {}
    read() {}
}

createMethod(Foo, "write", { id: 1 });
createMethod(Foo, "read", { id: 33 });