
class Student {
    name: string | undefined;
    age : number | undefined;
    address: string | undefined;

    constructor(name?: string, age?: number, address?:string) {
        this.name = name ?? "Guest";
        this.age = age ?? 0;
        this.address = address ?? "Unknown";
    }
    getName() {
        console.log(`Name: ${this.name}`);
    }
    getAge() {
        console.log(`Age: ${this.age}`);
    }
    getAddress() {
        console.log(`Address: ${this.address}`);
    }
}

const lucifer = new Student("Lucifer", 99, "Heaven");
const ryan = new Student();
lucifer.getName();
lucifer.getAge();
lucifer.getAddress();
ryan.getName();
ryan.getAge();
ryan.getAddress();

