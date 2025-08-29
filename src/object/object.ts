export {};

// const person: {username: string; age: number; address?: string} = {
//     username: "lucifer",
//     age: 23,
//     address: "Heaven"
// }

// const sayHi = (people: {
//     username: string; 
//     age: number; 
//     address?: string
// }) => {
//     console.log(`say Hi ${people.username}`);
// }

// sayHi(person);

// Alias
type Tperson = {
    username: string; 
    age: number; 
    address?: string
}

const student1: Tperson = {
    username:"Lucifer",
    age:23,
    address: "Heaven"
}

const student2: Tperson = {
    username: "Ryan",
    age: 20,
    address: "Heaven"
}

const queryInfo = (infor:Tperson) => {
    console.log(`Student name: ${infor.username}`);
}

queryInfo(student1);
queryInfo(student2);