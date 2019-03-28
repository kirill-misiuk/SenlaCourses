
let str= "123 Main Street St. Louisville OH 43071,432 Main Long Road St. Louisville OH 43071,786 High Street Pollocksville NY 56432,"
    + "54 Holy Grail Street Niagara Town ZP 32908,3200 Main Rd. Bern AE 56210,1 Gordon St. Atlanta RE 13000,"
    + "10 Pussy Cat Rd. Chicago EX 34342,10 Gordon St. Atlanta RE 13000,58 Gordon Road Atlanta RE 13000,"
    + "22 Tokyo Av. Tedmondville SW 43098,674 Paris bd. Abbeville AA 45521,10 Surta Alley Goodtown GG 30654,"
    + "45 Holy Grail Al. Niagara Town ZP 32908,320 Main Al. Bern AE 56210,14 Gordon Park Atlanta RE 13000,"
    + "100 Pussy Cat Rd. Chicago EX 34342,2 Gordon St. Atlanta RE 13000,5 Gordon Road Atlanta RE 13000,"
    + "2200 Tokyo Av. Tedmondville SW 43098,67 Paris St. Abbeville AA 45521,11 Surta Avenue Goodtown GG 30654,"
    + "45 Holy Grail Al. Niagara Town ZP 32918,320 Main Al. Bern AE 56215,14 Gordon Park Atlanta RE 13200,"
    + "100 Pussy Cat Rd. Chicago EX 34345,2 Gordon St. Atlanta RE 13222,5 Gordon Road Atlanta RE 13001,"
    + "2200 Tokyo Av. Tedmondville SW 43198,67 Paris St. Abbeville AA 45522,11 Surta Avenue Goodville GG 30655,"
    + "2222 Tokyo Av. Tedmondville SW 43198,670 Paris St. Abbeville AA 45522,114 Surta Avenue Goodville GG 30655,"
    + "2 Holy Grail Street Niagara Town ZP 32908,3 Main Rd. Bern AE 56210,77 Gordon St. Atlanta RE 13000";
function getAddress(arr,zip) {

    let numberArray = [];
    let adressArray = [];
    let arr2 = arr.split(',');
    let f = 0;
    let zipStr;
    for (let i = 0; i < arr2.length; i++) {
        zipStr = arr2[i].match(/[A-Z]{2}\s[0-9]{5}/g)
        zipStr = zipStr.join();
        if (zipStr === zip) {
            numberArray[f] = arr2[i].match(/^[0-9]*|,[0-9]*/gi).join('');
            adressArray[f] = arr2[i].match(/[a-z\.\s]/gi);
            adressArray[f].length = adressArray[f].length - 3;
            adressArray[f] = adressArray[f].join('');
            f++;

        }
    }

    let numberStr = numberArray.join(',');
    let adressStr = adressArray.join(',');
    return `${zip}:${adressStr}/${numberStr}`
}

console.log(getAddress(str, "AA 45522"));
console.log(getAddress(str, "EX 34342"));
console.log(getAddress(str, "EX 34345"));
console.log(getAddress(str, "AA 45521"));
console.log(getAddress(str, "AE 56215"));