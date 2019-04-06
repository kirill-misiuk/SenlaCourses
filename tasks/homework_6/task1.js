const parse=str=>{
    let num=0;
    let arr=[];
    for(let i=0;i<str.length;i++) {
        if (str.charAt(i) === 'i') ++num;
        if (str.charAt(i) === 'd') --num;
        if (str.charAt(i) === 's') num=num*num;
        if (str.charAt(i) === 'o') arr.push(num);
    }
    return arr;
};
console.log(parse("iiisxxxdoso"));