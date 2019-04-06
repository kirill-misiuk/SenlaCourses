let x = (str) => {
    if (typeof str === 'string') str=str.split('');
   str= str.filter((v, i) => str.indexOf(v) === i);
   return str
};
console.log(x('AAAABBBCCDAABBB'));
console.log(x([2,4,4,5,2,2,8]));
