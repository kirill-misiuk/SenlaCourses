const getWave = x => {
    let arr = [];
    for (let i = 0; i < x.length; i++) {
        let newstr;
        if (x.charAt(i) === ' ') i++;
        if (x.charAt(0).toUpperCase() === x.charAt(i))
            x = x.substring(0, 0) + x.charAt(i).toLocaleLowerCase() + x.substring(1);
        newstr = x.substring(0, i) + x.charAt(i).toLocaleUpperCase() + x.substring(i + 1);
        arr = arr.concat(newstr);
    }
    return arr
};
console.log(getWave('hello world'));
console.log(getWave('React'));