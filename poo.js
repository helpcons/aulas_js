// Classes

class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    static speak () {
        return 'Hello World!';
    }
}

const person = new Person ('Helder', 'Pereira', 34);
console.log(person);

console.log(person.getFullName());
console.log(Person.speak());