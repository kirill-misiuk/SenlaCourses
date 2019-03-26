class TopRated {

    constructor(hall, array) {

        this.hall = hall || 5;
        this.array = array;
        this.emptyArray = [];
        this.numArray = [];

    }

    add(player) {

        const sort = (a, b) => b - a;
        for (let i = 0; i < this.array.length; i++) {
            this.numArray.push(this.array[i][1])
        }
        let d = this.hall - (this.numArray.length + 1);
        if (d <= 0) d = 0;
        this.emptyArray = new Array(d).fill(' ');

        this.numArray.sort(sort);
        const sDecrease = (a, b) => b[1] - a[1];
        let ob = [player[0], player[1]];
        if (this.hall <= this.numArray.length && this.numArray[this.numArray.length - 1] < player[1]) {
            this.array.push(ob);
            this.array.sort(sDecrease);
            this.array.length = this.hall;
            this.numArray.push(player[1])


        } else {
            if (this.numArray[this.numArray.length - 1] < player[1]) {
                this.array.push(ob);
                this.array.sort(sDecrease);
                this.numArray.push(player[1]);

            }


        }
        return this
    }


    get list() {
        let output = [];
        let arr = [];
        const sDecrease = (a, b) => b[1] - a[1];
        this.array.sort(sDecrease);
        const sortAlphaNum = (a, b) => a.localeCompare(b, 'en', {numeric: true});

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
}

const top = new TopRated(2, [["F", 7], ["C", 10], ['D', 4]]);
top.add(["A", 10]);
console.log(top.list);
const x = new TopRated(3, [["Bob", 88], ["Eva", 66], ["Ada", 44]]);
x.add(["Clo", 10]);
console.log(x.list);
const w = new TopRated(3, [['Bob', 88], ['Kim', 88], ['Zoe', 88]]);
w.add(['Clo', 10]).add(['Ada', 44]);
console.log(w.list);
const e = new TopRated(3, [['Ada', 444], ['Bob', 2222], ['Clo', 55]]);
console.log(e.list);
const g = new TopRated(3, [['Bob', 88], ['Kim', 88], ['Zoe', 88]]);
g.add(['Clo', 10]).add(['Ada', 44]);
console.log(g.list);
const j = new TopRated(3, [['Bob', 88], ['Kim', 88], ['Zoe', 88]]);
j.add(['Bob', 89]).add(['Bob', 90]);
console.log(j.list);
