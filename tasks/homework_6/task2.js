const deleteDuplicate = arr => {
    if (typeof arr === 'string') arr = arr.split('');
    return arr.reduce((arr, next) => arr.slice(-1)[0] === next ? arr : [...arr, next], [])
};
console.log(deleteDuplicate('AAAABBBCCDAABBB'));
console.log(deleteDuplicate([2, 4, 4, 5, 2, 2, 8]));
