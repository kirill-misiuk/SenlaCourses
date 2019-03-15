const Warrior = function (name) {
    this.name = name;
    this.health = 100;
};

Warrior.prototype.strike = function (warrior, strength) {
    if (strength >= 0 && warrior.health >= 0) warrior.health -= strength * 10;
    if (warrior.health < 0) warrior.health = 0;
    console.log(`${this.name} attacks. ${warrior.name} health:`, warrior.health);
};


const orc = new Warrior('Thrall');
const man = new Warrior('Arthas');


orc.strike(man, 3);
man.strike(orc, 1);