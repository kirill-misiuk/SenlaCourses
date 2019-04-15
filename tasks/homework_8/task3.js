func=(number)=>{
  let sum=0;
  for(let i=0;i<number.length;i++)sum+=+number[i];
    return sum
};
function check(numbers) {
    return numbers.split(' ').sort((a,b)=>func(a)===func(b)? a-b: func(a)-func(b)).join(' ')
}

console.log(check('53133 145 162715 132 472273 97 181372 29 137714 40 456194 51 146067 84 93657 120 110688 55 239413 28 84'));