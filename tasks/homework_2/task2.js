let Array = {
    map:function (fn) {
        let result = [];
        for (let i = 0; i < this.array.length; i++)
            result.push(fn(this.array[i]));
        return result;
    }
};


function array(arr1,arr2) {
    this.arr1 = arr1;
    this.arr2=arr2;
}


array.prototype.map = Array;
let array1 = new array([1,2,3],['1','2','3']);

console.log(array1.arr1.map(x => x ** 2));
console.log(array1.arr1.map(x => 2 * x));
console.log(array1.arr1.map(x => 2 ** x));
console.log(array1.arr1.map(x => x.toString()));
console.log(array1.arr2.map(x => parseInt(x)));