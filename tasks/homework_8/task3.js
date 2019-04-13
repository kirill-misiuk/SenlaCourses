
function check(numbers) {
    numbers=[...numbers];
    digsum = (number) => {
        if (number.toString().length === 1) {
            return number;
        }
        // if(numbers===[])return 0;
        const tmp = number.toString().split('');
        let sum = tmp.reduce((a, b) => +a + +b);
        sum = digsum(sum);

        return sum;
    };
    let result = numbers.map(digsum).sort((a, b) => b - a).join();
    return result
}

console.log(check(34,35,36));