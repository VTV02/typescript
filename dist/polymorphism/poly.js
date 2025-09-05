class Dog {
    makeSounds() {
        console.log("Woof woof...");
    }
}
class Cat {
    makeSounds() {
        console.log("Mew mew ...");
    }
}
class Pig {
    makeSounds() {
        console.log("Ot ot...");
    }
}
const zoo = [new Dog, new Cat, new Pig];
zoo.forEach((item, index) => {
    item.makeSounds();
});
export {};
