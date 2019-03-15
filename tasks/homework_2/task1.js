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


Object.create = function (prototype, properties) {
    function fn() {
    }

    let hasOwn = Object.prototype.hasOwnProperty;
    if (typeof prototype != 'object') {
        throw TypeError('Object prototype may only be an Object or null');
    }
    fn.prototype = prototype;
    let obj = new fn();
    fn.prototype = null;
    if (arguments.length > 1) {
        let Properties = Object(arguments[1]);
        for (let properties in Properties) {
            if (hasOwn.call(Properties, properties)) {
                obj[properties] = Properties[properties];
            }
        }
        return obj;
    }
};
console.log(Object.create(citizen, veteran));
