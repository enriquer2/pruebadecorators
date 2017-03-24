export const deco = function(...params) { //... convierte en array
    return function(target, key, descriptor) {
        console.log(params[0]);
        console.log(target);
        target.meta = { a: 'b' };
        console.log(key);
        console.log(descriptor);
    };
}
export const nom = function(...params) { //... convierte en array
    return function(target, key, descriptor) {
        console.log(params[0]);
        console.log(target);
        target.meta = { alfa: 'nooooo' };
        console.log(key);
        console.log(descriptor);
    };
}
export const change = function(...params) { //... convierte en array
        return function(target, key, descriptor) {
            console.log(params[0]);
            console.log(target);
            target.meta = { beta: 'siiii' };
            console.log(key);
            console.log(descriptor);
        };
    }
    /////////////////////////////////////////////////////////////////////////////////////
export const readonly = function(...params) {
        return function(target, key, descriptor) {
            console.log(params[0]);
            console.log(target);
            console.log(key);
            console.log(descriptor);
            descriptor.writable = false;
            console.log(descriptor);
            return descriptor;
        }
    }
    ///////////////////////////////////////////////////////////////////////////////////
export const timer = function(...params) {
    return function(target, name, descriptor) {
        let fn = descriptor.value;
        descriptor.value = function() {
            console.time(name);
            let result = fn.apply(this, arguments)
            console.timeEnd(name);
        }
        Object.defineProperty(target, name, descriptor);
    }
}

//si es una clase, meter en target.meta
//si no -> target.constructor.meta