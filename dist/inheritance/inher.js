class Parent {
    sharedHouse() {
        console.log("Share a house");
    }
}
class Child extends Parent {
    sharedHouse() {
        super.sharedHouse();
        console.log("This is Child Class");
    }
}
const tom = new Child();
export {};
