const crossDesert = arr => {
    if (arr.length !== 0) {
        arr.reduce((a, c) => {
            if ((a === "NORTH") && (c === "SOUTH") || (a === "SOUTH") && (c === "NORTH") ||
                (a === 'EAST' && c === 'WEST') || (a === 'WEST' && c === 'EAST')) {
                arr.splice(arr.indexOf(c), 1);
                arr.splice(arr.indexOf(a), 1);
                crossDesert(arr);
                if (arr.indexOf('NORTH') !== -1 && arr.indexOf('SOUTH') !== -1) {
                    arr.splice(arr.indexOf('NORTH'), 1);
                    arr.splice(arr.indexOf('SOUTH'), 1);
                }
                if ((arr.indexOf('EAST') !== -1 && arr.indexOf('WEST') !== -1)) {
                    arr.splice(arr.indexOf('WEST'), 1);
                    arr.splice(arr.indexOf('EAST'), 1);
                }
            }
            return c
        });

        return arr
    } else return []
};
console.log(crossDesert(['NORTH', 'SOUTH', 'WEST', 'EAST']));
console.log(crossDesert(['NORTH', 'SOUTH', 'SOUTH', 'EAST', 'WEST', 'NORTH', 'NORTH']));
console.log(crossDesert(['NORTH', 'EAST', 'NORTH', 'EAST', 'WEST', 'WEST', 'EAST', 'EAST', 'WEST', 'SOUTH']));
console.log(crossDesert(['NORTH', 'SOUTH', 'SOUTH', 'EAST', 'WEST', 'NORTH', 'WEST']));
console.log(crossDesert(["NORTH", "WEST", "SOUTH", "EAST"]));
console.log(crossDesert(["NORTH", "WEST", "EAST", "EAST"]));
console.log('------------------------------------');
console.log(crossDesert(['EAST','EAST','WEST','NORTH','WEST','EAST','EAST','SOUTH','NORTH','WEST' ])); //['EAST', 'NORTH']]
console.log(crossDesert([ 'NORTH', 'WEST', 'SOUTH', 'EAST' ])); //['NORTH', 'WEST', 'SOUTH', 'EAST']
console.log(crossDesert(['NORTH', 'SOUTH', 'WEST', 'EAST', 'NORTH', 'SOUTH', 'EAST', 'SOUTH', 'WEST', 'EAST', 'NORTH', 'SOUTH', 'EAST', 'WEST'])); //['EAST', 'SOUTH']
console.log(crossDesert([ 'NORTH', 'SOUTH', 'SOUTH', 'EAST', 'WEST', 'NORTH' ])); //[]