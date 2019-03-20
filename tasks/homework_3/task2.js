Array.prototype.zip = function (arr, fn) {
    let result = [];
    for (let i = 0; i < Math.min(this.length,arr.length); i++)
        result.push(fn(this[i], arr[i]));
    return result;
};
const a = [1, 2, 3, 4, 5,6];
const b = ['a', 'b', 'c', 'd', 'e','f'];
console.log(a.zip(b, (a, b) => a + b));
console.log(b.zip(a, (a, b) => a + b));
console.log(b.zip(a.zip(b, (a, b) => a * b.charCodeAt(0)), (a, b) => a + b));

