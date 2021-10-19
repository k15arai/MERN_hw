// parent Ninja class
class Ninja {
    constructor(name, health, speed=3, strength=3) {
    // attributes go here
        this.name = name
        this.health = health
        this.speed = speed
        this.strength = strength
    }
    
    // methods go here
    sayName() {
        console.log(this.name);
    }

    showStats() {
        console.log(`Name: ${this.name}, Health: ${this.health}, Speed: ${this.speed}, Strength: ${this.strength}`);
    }

    drinkSake(health) {
        this.health += 10;
    }

}

// const ninja1 = new Ninja("Hayabusa", 100);
// ninja1.sayName();
// ninja1.showStats();

// child Sensei class
class Sensei extends Ninja {
    constructor(name, health=200, speed=10, strength=10) {
        super(name, health, speed, strength);
        this.wisdom = 10;
    }
    speakWisdom() {
        super.drinkSake();
        console.log("What one programmer can do in one month, two programmers can do in two months.");
    }
}

const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats();
