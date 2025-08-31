"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Animals {
    set age(age) {
        this.age_ = age;
    }
    get age() {
        return this.age_;
    }
    constructor(name, age) {
        this.name_ = name;
        this.age_ = age;
    }
    makeSound() {
        console.log("Bala");
    }
}
const tom = new Animals("Dog", 3);
console.log(tom.age);
