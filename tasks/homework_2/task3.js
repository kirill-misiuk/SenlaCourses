const Warrior = function (name) {
    this.name = name;
    this.health = 100;
};

Warrior.prototype.strike = function (warrior, strength) {
    if (strength >= 0 && warrior.health >= 0) warrior.health -= strength * 10;
    if (warrior.health < 0) warrior.health = 0;
};


const orc = new Warrior('Thrall');
const man = new Warrior('Arthas');


orc.strike(man, 3);
console.log(`${man.name} XP: ${man.health}`);
man.strike(orc, 1);
console.log(`${orc.name} XP: ${orc.health}`);