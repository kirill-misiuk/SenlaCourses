const encrypt=str=>{
 let strOne=str.split('').filter((item,i)=>i%2===0).join('');
 let strTwo=str.split('').filter((item,i)=>i%2!==0).join('');
    return strOne+strTwo;
};
console.log(encrypt('Simple text'));
console.log(encrypt("All that glitters is not gold"));
console.log(encrypt("The better part of valor is discretion"));
console.log(encrypt("Conscience does make cowards of us all"));