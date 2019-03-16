class Dictionary {
    newEntry(key, value) {
        this.key= key;
        this.value =value;
    }
    look(key) {
        if (this.key === key) {
            return this.value
        } else return `Can't find entry for key`
    }
}
let Entry= new Dictionary();
Entry.newEntry('JavaScript', 'An object-oriented computer programming language commonly used to create interactive effects within web browsers');
console.log(Entry.look('JavaScript'));
console.log(Entry.look('React'));
Entry.newEntry('React', 'An open source JavaScript library for developing interfaces.');
console.log(Entry.look('JavaScript'));
console.log(Entry.look('React'));












