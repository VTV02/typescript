class Employee {
    id: number | undefined;
    name: string | undefined;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
}

class Developer extends Employee {
    skill: string | undefined;

    constructor (id: number, name: string, skill: string) {
        super(id, name);
        this.skill = skill;
    }
}


interface IAnimals {
    makeSound(): void;
}

interface IFly {
    doFly(): void;
}

class Bird implements IAnimals, IFly {
    name: string | undefined;

    makeSound(){
        console.log("Chick chick ");
    }

    doFly() {
        console.log("Fly by wings");
    }
}
