"use strict";
class Animals {
    constructor(name) {
        this.name = name;
    }
}
class Dog extends Animals {
    makeSounds() {
        console.log("Wof wof");
    }
}
const tom = new Dog("Tom");
