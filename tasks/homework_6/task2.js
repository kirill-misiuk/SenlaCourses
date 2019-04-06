let x = (names) => {
    if (typeof names === 'string') names=names.split('');
   names= names.filter((v, i) => names.indexOf(v) === i);
   return names
};
console.log(x('AAAABBBCCDAABBB'));
console.log(x([2,4,4,5,2,2,8]));
