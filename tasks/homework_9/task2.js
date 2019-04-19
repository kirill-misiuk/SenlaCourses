


const getStatistic = (str) => {
    let arr;
    let result=[];
    arr = str.split(', ');
    arr.forEach(item=>result.push(item.split('|')));
    return `Range: ${Range(result)} Average: ${Average(result)} Median: ${Median(result)}`
};
const ddd=number=>{
    if(String(number).length===1)return`0${number}`;
    else return number
};
        const Range = (arr) => {
            let Array = [];
            let arrayMin = [];
            let arrayMax = [];
            let arrayNum = [];
            arr.forEach(item => Array.push(item.join().replace(/,/g, '').replace(/ /g, ', ')));
            Array.forEach(item => arrayNum.push(+item));
            let indexMax = arrayNum.indexOf(Math.max(...Array));
            let indexMin = arrayNum.indexOf(Math.min(...Array));
            arr[indexMax].forEach(item => arrayMax.push(+item));
            arr[indexMin].forEach(item => arrayMin.push(+item));
            if (arrayMax[2] < arrayMin[2]) {
                arrayMax[1] = arrayMax[1] - 1;
                arrayMax[2] = arrayMax[2] + 60;
            }
            if (arrayMax[1] < arrayMin[1]) {
                arrayMax[0] = arrayMax[0] - 1;
                arrayMax[1] = arrayMax[1] + 60;
            }
            return toString([ddd(arrayMax[0] - arrayMin[0]), ddd(arrayMax[1] - arrayMin[1]), ddd(arrayMax[2] - arrayMin[2])])
        };



const Median = (arr) => {
    let Array = [];
    let mass = [];
    let newmass = [];
    arr.forEach(item => mass.push(item.join()));
    mass.sort((a, b) => +(a.replace(/,/g, '')) - +(b.replace(/,/g, '')));
    mass.forEach(item => newmass.push(item.split(',')));
    arr = newmass;
    arr.forEach(item => Array.push(item.join().replace(/,/g, '').replace(/ /g, ', ')));
    let secArr = [];
    let minArr = [];
    let hoursArr = [];
    let sec, min, hours;
    for (let i = 0; i < arr.length; i++) {
        secArr.push(+arr[i][2]);
        minArr.push(+arr[i][1]);
        hoursArr.push(+arr[i][0]);
    }
    if (secArr.length % 2 !== 0) sec = secArr[(secArr.length - 1) / 2];
    else sec = Math.round((secArr[(secArr.length) / 2] + secArr[(secArr.length) / 2 - 1]) / 2);
    if (minArr.length % 2 !== 0) min = minArr[(minArr.length - 1) / 2];
    else min = Math.round((minArr[(minArr.length) / 2] + minArr[(minArr.length) / 2 - 1]) / 2);
    if (hoursArr.length % 2 !== 0) hours = hoursArr[(hoursArr.length - 1) / 2];
    else hours = Math.round((hoursArr[(hoursArr.length) / 2] + hoursArr[(hoursArr.length) / 2 - 1]) / 2);
    return toString([ddd(hours), ddd(min), ddd(sec)])
};

const Average=(arr)=>{
    let secArr = [];
    let minArr = [];
    let hoursArr = [];
    let sec, min, hours;
    for (let i = 0; i < arr.length; i++) {
        secArr.push(+arr[i][2]);
        minArr.push(+arr[i][1]);
        hoursArr.push(+arr[i][0]);
    }
let secSum,minSum,hoursSum;
    console.log(hoursSum=hoursArr.reduce((sum,current)=>sum+current));
    console.log(minSum=minArr.reduce((sum,current)=>sum+current));
    console.log(secSum=secArr.reduce((sum,current)=>sum+current));


    if(secSum>=60) {
        sec=Math.floor(secSum / 60);
        secSum = secSum-(sec*60);
        minSum=minSum+sec
    }
    if(minSum>=60){
        min=Math.floor(minSum/60);
        minSum=minSum-(min*60);
        hoursSum=hoursSum+min;
    }
    hoursSum=Math.floor(hoursSum/arr.length);
    minSum=Math.floor(minSum/arr.length);
    secSum=Math.floor(secSum/arr.length);


    return toString([ddd(hoursSum), ddd(minSum), ddd(secSum)])
};

const toString=(arr)=>{
    return arr.join(' ').replace(/ /g, '|');
};
console.log(getStatistic('12|17|20, 10|16|16, 1|22|00, 2|32|34, 10|26|37, 13|19|34, 2|32|34, 12|17|20, 02|17|20')) ;
// console.log(getStatistic('1|32|34, 2|22|00, 2|17|17, 1|17|48, 02|17|20, 1|47|16, 00|22|34, 00|22|34, 1|47|16, 9|22|34, 2|17|17, 2|22|00, 00|17|20, 00|22|34, 10|26|37, 1|47|16, 11|22|00'));
// console.log(getStatistic('9|22|34, 2|17|17, 12|17|48, 1|15|59, 10|16|16'));
console.log(getStatistic('1|32|34, 2|22|00, 2|17|17, 1|17|48, 02|17|20, 1|47|16, 00|22|34, 00|22|34, 1|47|16, 9|22|34, 2|17|17, 2|22|00, 00|17|20, 00|22|34, 10|26|37, 1|47|16, 11|22|00'));
console.log(getStatistic('00|19|34, 02|17|20, 2|47|16'));