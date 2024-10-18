// Bas Klass: Character
class Character {
    constructor(name, health, strength, intelligence, charisma) {
        this.name = name;
        this.health = health;
        this.strength = strength;
        this.intelligence = intelligence;
        this.charisma = charisma;
    }

    // Metod för att förhandla, använder attribut och en slumpfaktor
    negotiate() {
        const successChance = Math.random() * 100;
        if (successChance < this.charisma * 2) {
            console.log(`${this.name} lyckades förhandla fram en fördel!`);
            return true;
        } else {
            console.log(`${this.name} misslyckades i förhandlingen.`);
            return false;
        }
    }

    // En metod för att attackera en annan karaktär
    attack(target) {
        const damage = Math.floor(Math.random() * this.strength);
        target.health -= damage;
        console.log(`${this.name} attackerar ${target.name} och gör ${damage} skada!`);
    }

    // En metod för att hela sig själv
    heal() {
        const healing = Math.floor(Math.random() * this.intelligence);
        this.health += healing;
        console.log(`${this.name} helar sig själv med ${healing} poäng.`);
    }
}

// Exempel på specifik karaktärsklass: Warrior
class Warrior extends Character {
    constructor(name) {
        super(name, 100, 20, 10, 5); // Health, Strength, Intelligence, Charisma
    }
}

// Exempel på specifik karaktärsklass: Mage
class Mage extends Character {
    constructor(name) {
        super(name, 70, 5, 25, 10); // Health, Strength, Intelligence, Charisma
    }
}

// Exempel på specifik karaktärsklass: Bard
class Bard extends Character {
    constructor(name) {
        super(name, 80, 10, 15, 20); // Health, Strength, Intelligence, Charisma
    }
}

// Testa karaktärerna
const warrior = new Warrior('Ragnar');
const mage = new Mage('Merlin');
const bard = new Bard('Lute');

warrior.attack(mage);
mage.heal();
bard.negotiate();
