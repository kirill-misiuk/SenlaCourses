const citizen = {
    sleep: function () {
        return "zzZ...";
    },
    panic: function () {
        return "AaAaAaAa!";
    }
};

let veteran = Object.defineProperties(citizen, {
    sleep: {value: citizen.sleep(), enumerable: true, configurable: true},
    panic: {value: 'SNAFU', enumerable: true, configurable: true},
});


Object.create = function (o, prop) {
    function Temp() {
    }

    let hasOwn = Object.prototype.hasOwnProperty;
    if (typeof o != 'object') {
        throw TypeError('Object prototype may only be an Object or null');
    }
    Temp.prototype = o;
    let obj = new Temp();
    Temp.prototype = null;
    if (arguments.length > 1) {
        let Properties = Object(arguments[1]);
        for (let prop in Properties) {
            if (hasOwn.call(Properties, prop)) {
                obj[prop] = Properties[prop];
            }
        }
        return obj;
    }
};
console.log(Object.create(citizen, veteran));
console.log(veteran !== citizen); // true
console.log(veteran instanceof citizen.constructor); // true
console.log(veteran.sleep); // zzZ...
console.log(veteran.panic); //SNAFU
