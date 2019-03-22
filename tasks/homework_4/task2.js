class TopRated {

    constructor(hall) {

        this.hall = hall || 5;
        this.player = new Array(this.hall + 1).join(' ').split('');
        this.count = 0;
        this.array =[];
    }

    get list() {

    }

    add(player) {
        let count = 0;
        for (let i = 0; i < this.player.length; ++i) {
            if (this.player[i] === ' ')
                count++;
        }
        if (count > 0) {
            this.array.push(player[1]);
            this.player[this.count] = `${player[0]}:${player[1]}`;
            this.count = this.count + 1;
            return this
        }
        else{
            if(player[1]>Math.min.apply(Math,this.array)){
                this.player[this.count] = `${player[0]}:${player[1]}` ;
            }

        }
    }

}


const top = new TopRated(5);
top.add(["E", 3]).add(["I", 2]).add(['d',1]);
console.log(top.player);
console.log(top.array);