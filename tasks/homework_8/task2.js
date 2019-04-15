function check(arr) {
    const obj = {};
    let count = 1;
    let Array = [];
    arr.forEach(item => Array.push(...item));
    Array.sort((a, b) => a - b).forEach((item, i) => {
        if (Array[i] === Array[i + 1]) count++;
        else {
            obj[item] = count;
            count = 1;
        }
    });
    const max = Math.max(...Object.values(obj));

    let mass = [];
    for (let count in obj) {
        if (max === obj[count]) {
            mass.push(count)
        }
    }

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            for (let k = 0; k < mass.length; k++) {
                if ((arr[i][j] == mass[k])) {
                    delete arr[i][j]
                }
            }
        }
        arr = arr.map((x) => x.filter(i => i !== '<1 empty item>'))
    }
    return arr
}
console.log(check([ [ 3, 4, 5 ] ]));
console.log(check([ [ 3, 4, 5 ], [ 3, 4, 5 ] ]));
console.log(check([ [ 5, 6, 8, 4, 7, 7, 1, 7, 7, 7, 8 ], [ 7, 8, 1, 8, 3, 7, 4, 2, 8, 3, 4 ], [ 8, 0, 1, 6, 9, 3, 2, 6, 2, 1, 7 ] ]));
console.log(check([ [] ]));
console.log(check([]));
console.log(check([ [ 8, 1, 6, 7, 4, 1, 8, 7 ], [ 0, 0, 0, 7, 2, 3, 2, 3, 8, 2, 5 ], [ 0, 3, 9, 7, 8, 9, 8, 9, 2, 9, 4, 8 ] ]));