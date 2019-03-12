let result = false;
const duplicateArgs = arr => ...arr.split(' ').forEach((item, i, arr) =>  result = i !== arr.indexOf(item) || i !== arr.lastIndexOf(item) );
duplicateArgs([1,2,3]);
console.log(result);
duplicateArgs([35, 14, 40, 14]);
console.log(result);
duplicateArgs(['abc', 'sso', 'js', 'true', 'else', 'js']);
console.log(result);
