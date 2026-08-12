type Employee = {
    name: string;
    age: number;
    role: string;
    isActive: boolean;
};

let employee1: Employee = {
    name: "John Doe",
    age: 30,
    role: "Software Engineer",
    isActive: true
};
console.log(employee1.name); // Output: John Doe
console.log(employee1.age); // Output: 30   
console.log(employee1.role); // Output: Software Engineer
console.log(employee1.isActive); // Output: true