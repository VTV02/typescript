class Users {
    constructor(name, email, role) {
        this.name_ = name;
        this.email_ = email;
        this.role_ = role ?? "student";
    }
    set email(email) {
        this.email_ = email;
    }
    get email() {
        return this.email_;
    }
    getInfo() {
        console.log(`Name: ${this.name_}
            Email: ${this.email_}
            Role: ${this.role_}`);
    }
    // phương thức ảo (virtual method) -> để class con override
    printUserInfo() {
        console.log(`[${this.name_}] - Role: ${this.role_}`);
    }
}
class Teacher extends Users {
    addCourse(courseName) {
        this.courses_ = courseName;
    }
    printUserInfo() {
        console.log(`[${this.name_}] - Course Taught: ${this.courses_}`);
    }
}
class Student extends Users {
    enroll(courseName) {
        this.enrolledCourse_ = courseName;
    }
    printUserInfo() {
        console.log(`[${this.name_}] - Course Taught: ${this.enrolledCourse_}`);
    }
}
const zeus = new Teacher("Zeus", "zeus@god.heaven", "teacher");
const lucifer = new Student("Lucifer", "lucifer@god.hell", "student");
zeus.addCourse("Magic");
lucifer.enroll("Magic");
zeus.getInfo();
zeus.printUserInfo();
lucifer.getInfo();
lucifer.printUserInfo();
export {};
