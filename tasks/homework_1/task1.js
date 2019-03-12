const [arr1,arr2,arr3,arr4] =  [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]];
let arr = [...arr1,...arr2,...arr3,...arr4];
arr.sort((a,b)=> b-a);
console.log(arr);