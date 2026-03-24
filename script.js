// complete this js code
function Person(name, age) {
	 constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
}

function Employee(name, age, jobTitle) {
 constructor(name, age, jobTitle) {
        super(name, age);
        this.jobTitle = jobTitle;
    }

    jobGreet() {
        return `Hello, my name is ${this.name}, I am ${this.age} years old and I work as a ${this.jobTitle}.`;
    }
}

const person1 = new person("Alice", 25);
console.log(person1.greet()); 

const emp1 = new Employee("Bob", 30, "Manager");
console.log(emp1.greet()); 
console.log(emp1.jobGreet());

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
