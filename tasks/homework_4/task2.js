class TopRated {


    constructor(hall) {

        this.hall = hall || 5;
        this.array = [];
        this.emptyArray = [];
    }

    get list() {

        let output = [];
        let arr = [];
        const sDecrease = (a, b) => b[1] - a[1];
        const sortAlphaNum = (a, b) => b.localeCompare(a, 'en', {numeric: true});
        this.array.sort(sDecrease);
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
        let ob = [player[0], player[1]];
        this.array.push(ob);
        return this
    }

}

const top = new TopRated(6);
top.add(["A", 1]).add(["F", 4]).add(["C", 2]).add(['D', 4]);
top.emptyArray = new Array(top.hall - top.array.length).fill(' ');
console.log(top.list);
