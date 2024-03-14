class User {
    constructor (firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    fullName() {
        return (`${this.firstName} ${this.lastName}`); // combine first and last name to get the fullName
    }
    birthYear(){ //get the birthYear for all users
        const currentYear = new Date().getFullYear();
        const birthYear = currentYear - this.age;
        return birthYear;
    }
};
//try to console the fullName function to check if it works:
//---->
//const user1 = new User('Brad', 'Pitt', 59);
//console.log(user1.fullName()) <---- and it's working!

//check if the function birthYear works: ---->
//const user1 = new User('Brad', 'Pitt', 59);
//console.log(user1.birthYear()) <---- and it's working!

class Teacher extends User {
    constructor(firstName, lastName, age, groups, grade) {
        super(firstName, lastName, age)
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.groups = groups || [];
        this.grade = grade;
    }

    isGroupTeacher(group) { //method that checks if teacher is in this group's
        return this.groups.includes(group);
    }
}

class Student extends Teacher {
    static MIN_GRADE_FOR_SCHOLARSHIP = 4;

    constructor(firstName, lastName, age, group, grades) {
        super(firstName, lastName, age, [group], grades); // needed to put [] for group!
        this.group = group;
        this.grades = grades || [];
    }

    isEligibleForScholarship() {
        const averageGrade = this.grades.reduce((total, grade) => total + grade, 0) / this.grades.length;
        return averageGrade >= Student.MIN_GRADE_FOR_SCHOLARSHIP;
    }
}

const teacher1 = new Teacher('Brad', 'Pitt', 59, ['50b', '51c'], 41);
const student1 = new Student('Tom', 'Cruise', 60, '50b', [4.9]);
const student2 = new Student('Leonardo', 'DiCaprio', 49, '62c', [3.9]);

console.log(student1.fullName()); // Tom Cruise
console.log(student2.birthYear()); // 1975
console.log(student1.isEligibleForScholarship()); // true
console.log(student2.isEligibleForScholarship()); // false
console.log(teacher1.isGroupTeacher(student1.group)); // true
console.log(teacher1.isGroupTeacher(student2.group)); // false
console.log(Student.MIN_GRADE_FOR_SCHOLARSHIP); // 4
    


    
