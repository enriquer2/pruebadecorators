export const rator1 = function(...params) { //... convierte en array
    return function(target, key, descriptor) {
        console.log(params[0]);
        console.log(target);
        //        target.meta = { alfa: 'nooooo' };
        console.log(key);
        console.log(descriptor);
    };
}