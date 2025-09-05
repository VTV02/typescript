export {};
class Users {
  name_: string | undefined;
  private email_: string;
  protected role_: "student" | "teacher" | undefined;

  constructor(name: string, email: string, role: "student" | "teacher") {
    this.name_ = name;
    this.email_ = email;
    this.role_ = role ?? "student";
  }

  set email(email: string) {
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
  printUserInfo(): void {
    console.log(`[${this.name_}] - Role: ${this.role_}`);
  }
}
class Teacher extends Users {
  private courses_: string | undefined;

  addCourse(courseName: string) {
    this.courses_ = courseName;
  }

  override printUserInfo() {
    console.log(`[${this.name_}] - Course Taught: ${this.courses_}`);
  }
}

class Student extends Users {
  private enrolledCourse_: string | undefined;

  enroll(courseName: string) {
    this.enrolledCourse_ = courseName;
  }

  override printUserInfo() {
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
