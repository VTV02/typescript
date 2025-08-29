"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const student1 = {
    username: "Lucifer",
    age: 23,
    address: "Heaven"
};
const student2 = {
    username: "Ryan",
    age: 20,
    address: "Heaven"
};
const queryInfo = (infor) => {
    console.log(`Student name: ${infor.username}`);
};
queryInfo(student1);
queryInfo(student2);
