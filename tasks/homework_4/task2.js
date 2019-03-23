class TopRated {


    constructor(hall) {

        this.hall = hall || 5;
        this.mass = []
    }

    get list() {

        let output = [];
        let arr = [];
        const sDecrease = (a, b) => b[1] - a[1];
        this.mass.sort(sDecrease);
        for (let i = 0; i < this.mass.length; ++i) {

            if (this.mass[i][0] === ' ') {
                output.push(`${this.mass[i][0]}`);
            } else {
                output.push(`${this.mass[i][0]}:${this.mass[i][1]}`);
                arr.push(this.mass[i][1]);
            }
        }

        // arr.map((item) => item.name);
        // let isDuplicate = arr.some((item, idx) => arr.indexOf(item) !== idx);
        // if (isDuplicate) {
        //     output.sort();
        // }
        return output;
    }


    add(player) {
        let ob = [player[0], player[1]];
        this.mass.push(ob);
        return this
    }

}

const top = new TopRated(7);
top.add(["A", 1]).add(["D", 4]).add(["C", 2]).add(['ff', 4]);
let array = new Array(top.hall - top.mass.length).fill(' ');
top.mass = [...top.mass, ...array];
console.log(top.list);
