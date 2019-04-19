const getStatistic = (str) => {
    if (str === '') return '""';
    let arr;
    let result = [];
    arr = str.split(', ');
    arr.forEach(item => result.push(item.split('|')));
    return `Range: ${Range(result)} Average: ${Average(result)} Median: ${Median(result)}`
};
const ddd = number => {
    if (String(number).length === 1) return `0${number}`;
    else return number
};
const toString = (arr) => {
    return arr.join(' ').replace(/ /g, '|');
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
const Average = (arr) => {
    let secArr = [];
    let minArr = [];
    let hoursArr = [];
    let secSum, minSum, hoursSum, sec, min, hours;
    for (let i = 0; i < arr.length; i++) {
        secArr.push(+arr[i][2]);
        minArr.push(+arr[i][1]);
        hoursArr.push(+arr[i][0]);
    }
    hoursSum = hoursArr.reduce((sum, current) => sum + current);
    minSum = minArr.reduce((sum, current) => sum + current);
    secSum = secArr.reduce((sum, current) => sum + current);
    hoursSum = hoursSum * 3600;
    minSum = minSum * 60;
    sec = Math.floor((hoursSum + minSum + secSum) / arr.length);
    hours = Math.floor(sec / 3600);
    sec = sec - (hours * 3600);
    min = Math.floor(sec / 60);
    sec = sec - min * 60;
    return toString([ddd(hours), ddd(min), ddd(sec)])
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
    let key = 2;
    let secSum, minSum, hoursSum;
    let sec, min, hours;
    for (let i = 0; i < arr.length; i++) {
        secArr.push(+arr[i][2]);
        minArr.push(+arr[i][1]);
        hoursArr.push(+arr[i][0]);
    }
    if (secArr.length % 2 !== 0) {
        key = 1;
        secSum = secArr[(secArr.length - 1) / 2]
    } else secSum = secArr[(secArr.length) / 2] + secArr[((secArr.length) / 2) - 1];

    if (minArr.length % 2 !== 0) {
        key = 1;
        minSum = minArr[(minArr.length - 1) / 2]
    } else minSum = minArr[(minArr.length) / 2] + minArr[((minArr.length) / 2) - 1];

    if (hoursArr.length % 2 !== 0) {
        key = 1;
        hoursSum = Math.floor(hoursArr[(hoursArr.length - 1) / 2])
    } else hoursSum = hoursArr[(hoursArr.length) / 2] + hoursArr[((hoursArr.length) / 2) - 1];

    hoursSum = hoursSum * 3600;
    minSum = minSum * 60;
    sec = Math.floor((hoursSum + minSum + secSum) / key);
    hours = Math.floor(sec / 3600);
    sec = sec - (hours * 3600);
    min = Math.floor(sec / 60);
    sec = sec - min * 60;
    return toString([ddd(hours), ddd(min), ddd(sec)])
};
console.log(getStatistic('12|17|20, 10|16|16, 1|22|00, 2|32|34, 10|26|37, 13|19|34, 2|32|34, 12|17|20, 02|17|20'));
console.log(getStatistic('1|32|34, 2|22|00, 2|17|17, 1|17|48, 02|17|20, 1|47|16, 00|22|34, 00|22|34, 1|47|16, 9|22|34, 2|17|17, 2|22|00, 00|17|20, 00|22|34, 10|26|37, 1|47|16, 11|22|00'));
console.log(getStatistic('9|22|34, 2|17|17, 12|17|48, 1|15|59, 10|16|16'));
console.log(getStatistic('00|19|34, 02|17|20, 2|47|16'));
console.log(getStatistic('11|15|59, 10|16|16, 12|17|20, 9|22|34, 13|19|34, 11|15|17, 11|22|00, 10|26|37, 12|17|48, 9|16|30, 12|20|14, 11|25|11'));
console.log(getStatistic('10|16|16, 1|16|16, 9|22|34, 13|19|34, 2|32|34, 1|17|48, 1|15|59, 1|19|34, 00|16|16, 13|19|34, 01|15|59, 2|17|17, 12|17|20, 12|17|48, 1|22|34, 1|22|00, 00|19|34, 12|17|48, 2|17|17, 1|15|59'));
console.log(getStatistic('2|32|34, 10|16|16, 1|25|11, 00|19|34, 2|32|34, 00|15|17, 13|19|34, 1|25|11, 12|17|48, 1|17|20, 00|15|17, 12|20|14, 1|22|34, 02|15|59'));
console.log(getStatistic('11|15|59, 10|16|16, 12|17|20, 9|22|34, 13|19|34, 11|15|17, 11|22|00, 10|26|37, 12|17|48, 9|16|30, 12|20|14, 11|25|11'));
console.log(getStatistic('1|20|14, 12|17|20, 13|19|34, 00|22|34, 00|16|16, 1|26|37'));
console.log(getStatistic('1|19|34, 02|15|59, 1|20|14, 1|25|11'));
console.log(getStatistic('02|17|20, 2|32|34'));
console.log(getStatistic('2|17|17, 1|15|17, 11|15|59, 02|15|59, 2|17|17, 1|22|34'));
console.log(getStatistic('02|15|59, 2|47|16, 02|17|20, 2|32|34, 2|32|34, 2|17|17'));
console.log(getStatistic('02|15|59, 00|17|20, 02|17|20, 2|32|34, 00|17|20, 12|20|14'));
console.log(getStatistic('00|17|20, 01|15|59, 11|15|17, 11|25|11'));
console.log(getStatistic(''));
