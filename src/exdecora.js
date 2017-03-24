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