"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Student {
    // methods
    sleep() {
        console.log("Student is sleeping", this.name);
    }
}
const lucifer = new Student();
lucifer.name = "Lucifer";
lucifer.age = 99;
lucifer.address = "Heaven";
lucifer.sleep();
