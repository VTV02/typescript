"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const student1 = {
    id: 1,
    name: "Lucifer",
    email: "lucifer@heaven.god",
    isPremium: true,
    contact: 34567890,
};
const student2 = {
    id: 2,
    name: "Zeus",
    email: "zeus@heaven.god",
    isPremium: true,
    contact: "king@heaven.god",
};
const course = {
    courseId: 1,
    title: "Web developer",
    price: 1000000,
    students: [],
};
const registerStudentToCourse = (st, course) => {
    if (!course.students) {
        course.students = [];
    }
    course.students.push(st);
};
const printCourseInfo = (course) => {
    console.log(`Course title: ${course.title}`);
    if (course.students && course.students.length > 0) {
        console.log("Student:");
        course.students.forEach(element => {
            console.log(`-${element.name} (${element.email})`);
        });
    }
    else {
        console.log("No Students Registered Yet!");
    }
};
registerStudentToCourse(student1, course);
registerStudentToCourse(student2, course);
printCourseInfo(course);
