export {};

// const name: null | string = "Ryan";
// const age = undefined;
// const printName = (myName: null | string) => {
//     myName?.toLowerCase();
//     console.log("Name: ", myName);
// }

interface IPerson {
    name: string;
    age: number;
    address?: string,
    sayHi: () => void;
}

interface Istudent extends IPerson {
    score: number
}

const student: Istudent = {
    name: "Zeus",
    age: 9000,
    score: 9,
    sayHi: () => console.log("say Hi Olympus")
}


const user: IPerson = {
    name: "Lucifer",
    age: 23,
    sayHi: () => console.log("say Hi...")
}

student.sayHi();
user.sayHi();