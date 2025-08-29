export {};

type TStudent = {
    id: number;
    name: string;
    email: string;
    isPremium: boolean;
    contact: string | number;
};

type TCourse = {
    courseId: number;
    title: string;
    price: number;
    students?: TStudent[];
};

const student1: TStudent = {
    id: 1,
    name: "Lucifer",
    email: "lucifer@heaven.god",
    isPremium: true,
    contact: 34567890,
};

const student2: TStudent = {
    id: 2,
    name: "Zeus",
    email: "zeus@heaven.god",
    isPremium: true,
    contact: "king@heaven.god",
};

const course: TCourse = {
    courseId: 1,
    title: "Web developer",
    price: 1000000,
    students: [],
};

const registerStudentToCourse = (st: TStudent, course: TCourse) => {
    if (!course.students) {
        course.students = [];
    }
    course.students.push(st);
};

const printCourseInfo= (course: TCourse) => {
    console.log(`Course title: ${course.title}`);
    if(course.students && course.students.length > 0) {
        console.log("Student:");
        course.students.forEach(element => {
            console.log(`-${element.name} (${element.email})`);
        })
    }
    else {
        console.log("No Students Registered Yet!");
    }
}

registerStudentToCourse(student1, course);
registerStudentToCourse(student2, course);
printCourseInfo(course);    