class Student {
    id: number;
    age: number;
    email: string;

    constructor(id: number, age: number, email: string) {
        this.id = id;
        this.age = age;
        this.email = email;
    }
}
let students: Student[] = [];
students.push(new Student(1, 20, "a1@gmail.com"));
students.push(new Student(2, 19, "a2@gmail.com"));
console.log("Thông tin của các sinh viên trong mảng:");
for (let i = 0; i < students.length; i++) {
    console.log(students[i].id);
    console.log(students[i].age);
    console.log(students[i].email);
    console.log("*---------------*");
}