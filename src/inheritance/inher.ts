export {};

class Parent {
    gold: number | undefined;
    money: number | undefined;
    car: string | number | undefined;

    sharedHouse() {
        console.log("Share a house");
    }
}

class Child extends Parent {
    name: string | undefined;
    sharedHouse () {
        super.sharedHouse();
        console.log("This is Child Class");
    }
}

const tom = new Child();
