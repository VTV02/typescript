export {};

class Animals {
    public name_: string | undefined;
    private age_: number;

    set age(age:number) {
        this.age_ = age;
    }

    get age() {
        return this.age_;
    }

    constructor(name:string, age:number) {
        this.name_ = name;
        this.age_ = age;
    }
    makeSound () {
        console.log("Bala");
    }
}

const tom = new Animals("Dog",3);

console.log(tom.age);


