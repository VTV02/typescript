

abstract class Animals {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
    abstract makeSounds(): void;
}

class Dog extends Animals {
    makeSounds() {
        console.log("Wof wof");
    }
}

const tom = new Dog("Tom");