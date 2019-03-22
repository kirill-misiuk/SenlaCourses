class TopRated {

    constructor(hall) {

        this.hall = hall || 5;
        this.player = [];
        this.array1 = [];
        this.array2 = [];
        this.isSet = false;
    }

    get list() {
        this.array1.sort((a, b) => a - b);


        return this.player
    }

    add(player) {

        this.array1.push(`${player[0]}:${player[1]}`);
        if (!this.isSet) {
            this.array2 = new Array(this.hall - 2 - this.array1.length).join(' ').split('');
            this.isSet = true
        }
        this.player = [...this.array1, ...this.array2];
        return this
    }
}


const top = new TopRated(8);
top.add(["D", 45]).add(["A", 4]).add(["E", 3]).add(["I", 1]);
console.log(top.list);
console.log(top.array1);
console.log(top.array2);
