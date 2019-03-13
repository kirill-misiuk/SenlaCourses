const sort =(arr)=>[].concat(...arr).sort((a, b) => b - a);
console.log(sort([[3, 2, 1], [4, 6, 5], [], [9, 7, 8]]));
