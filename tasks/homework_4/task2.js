class TopRated {


    constructor(hall) {

        this.hall = hall || 5;
        this.array = [];
        this.emptyArray = [];
        this.numArray = [];
    }

    get list() {
        let output = [];
        let arr = [];
        const sortAlphaNum = (a, b) => b.localeCompare(a, 'en', {numeric: true});
        for (let i = 0; i < this.array.length; ++i) {
            if (this.array[i][0] === ' ') {
                output.push(`${this.array[i][0]}`);
            } else {
                output.push(`${this.array[i][0]}:${this.array[i][1]}`);
                arr.push(this.array[i][1]);
            }
        }
        arr.map((item) => item.name);
        let isDuplicate = arr.some((item, idx) => arr.indexOf(item) !== idx);
        if (isDuplicate) {
            output.sort(sortAlphaNum)
        }
        return [...output, ...this.emptyArray];
    }


    add(player) {
        let mass = [];
        const sort = (a, b) => b - a;
        this.numArray.push(player[1]);
        this.numArray.sort(sort);
        const sDecrease = (a, b) => b[1] - a[1];
        let ob = [player[0], player[1]];

        if (this.numArray.length > this.hall && this.numArray[this.numArray.length - 1] < player[1]) {
            this.array[this.array.length - 1] = ob

        } else {

            this.array.push(ob);
            this.array.sort(sDecrease);
        }
        return this
    }
}

const top = new TopRated(6);
let d = top.hall - top.array.length;
if (d < 0) d = 0;
top.emptyArray = new Array(d).fill(' ');


top.add(["A", 1]).add(["F", 3]).add(["C", 2]).add(['D', 4]);
console.log(top.list);
