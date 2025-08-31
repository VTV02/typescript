
export{};
class Student {
    // field
    name: string | undefined;
    age: number | undefined;
    address: string | undefined;

    // methods
    sleep() {
        console.log("Student is sleeping",this.name);
    }
}

const lucifer = new Student();
lucifer.name = "Lucifer";
lucifer.age = 99;
lucifer.address = "Heaven";
lucifer.sleep();
