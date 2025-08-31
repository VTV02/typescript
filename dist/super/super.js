"use strict";
class Employee {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
class Developer extends Employee {
    constructor(id, name, skill) {
        super(id, name);
        this.skill = skill;
    }
}
class Bird {
    makeSound() {
        console.log("Chick chick ");
    }
    doFly() {
        console.log("Fly by wings");
    }
}
