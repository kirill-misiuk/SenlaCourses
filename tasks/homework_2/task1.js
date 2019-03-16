const citizen = {
    sleep: function () {
        return "zzZ...";
    },
    panic: function () {
        return "AaAaAaAa!";
    }
};
const veteran = {};
let prop = Object.defineProperties(citizen, {
    sleep: {value: citizen.sleep(), enumerable: true, configurable: true},
    panic: {value: 'SNAFU', enumerable: true, configurable: true},
});


Object.create = function (prototype, properties) {
    if (typeof prototype != 'object') {
        throw TypeError('Object prototype may only be an Object or null');
    }
    prototype = properties;
    return prototype
};
console.log(Object.create(veteran, prop));
console.log(veteran !== citizen); // true
console.log(veteran instanceof citizen.constructor); // true
