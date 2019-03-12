let result = false;
const duplicateArgs = (...array) => {
    array.forEach((item, itemNumber, array) =>  result = itemNumber !== array.indexOf(item) || itemNumber !== array.lastIndexOf(item));
    console.log(result);
    };
duplicateArgs(1,2,3);
duplicateArgs(35,14,40,14);
duplicateArgs('18','2','77','2');
duplicateArgs('abc', 'sso', 'js', 'true', 'else', 'js');


