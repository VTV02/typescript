export {};
interface IAnimals {
    makeSounds(): void;
}

class Dog implements IAnimals {
    name: string | undefined;
    makeSounds(): void {
        console.log("Woof woof...");
    }
}

class Cat implements IAnimals {
    name: string | undefined;
    makeSounds(): void {
        console.log("Mew mew ...");
    }
}

class Pig implements IAnimals {
    name: string | undefined;
    makeSounds(): void {
        console.log("Ot ot...");
    }
}
const zoo: IAnimals[] = [new Dog, new Cat, new Pig];

zoo.forEach((item, index) => {
    item.makeSounds();
})