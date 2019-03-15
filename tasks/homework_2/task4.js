class Dictionary {
    constructor(key, value) {
        this.key = key;
        this.value = value
    }

    static newEntry(key, value) {
        return new Dictionary(key, value);
    }

    look(key) {
        if (this.key === key) {
            console.log(this.value)
        } else console.log(`Can't find entry for key`);
    }

}

let entryOne = Dictionary.newEntry('JavaScript', 'An object-oriented computer programming language commonly used to create interactive effects within web browsers.')
let entryTwo = Dictionary.newEntry('React', 'An open source JavaScript library for developing interfaces.');
entryOne.look('JavaScript');
entryTwo.look('React');















