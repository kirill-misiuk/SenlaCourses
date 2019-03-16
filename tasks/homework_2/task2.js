const Array = function (array) {
    this.array = array;
};

Array.prototype.map = function (fn) {
    let result = [];
    for (let i = 0; i < this.array.length; i++)
        result.push(fn(this.array[i]));
    return result;
};

const array = new Array([1, 2, 3]);
const array2 = new Array(['1', '2', '3']);
console.log(array.map(x => x ** 2));
console.log(array.map(x => 2 * x));
console.log(array.map(x => 2 ** x));
console.log(array.map(x => x.toString()));
console.log(array2.map(x => parseInt(x)));




