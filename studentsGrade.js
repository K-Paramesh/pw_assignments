function studentsGrade(marks) {
    switch (true) {
        case (marks >= 75):
            console.log("The grade is A");
            break;

        case (marks >= 50 && marks < 75):
            console.log("The grade is B");
            break;

        case (marks >= 35 && marks < 50):
            console.log("The grade is C");
            break;

        default:
            console.log("The student has failed");
    }
}
studentsGrade(26);