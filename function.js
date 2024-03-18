// Funções e Arrow Functions

// function sum(a, b) {
//     return a + b;
// };

// const sumValue = sum(2, 5);

// console.log(sumValue);

// caso não seja passado nenhum valor para "b" a função pode quebrar dessa forma podemos
// definir um valor padrão para ele: function sum(a, b=10)

// Arrow Function

const sumArrow = (a, b) => {
    return a + b;
};

// Arrow Function
const sum1Arrow = (a, b) => a + b;

const sumValue = sum1Arrow(3, 4);

console.log(sumValue);



// Herança

class Animal {
    constructor(name) {
        this.name = name;
    }

    speak () {
        console.log(`${this.name} made some noise!`);
    }
}

class Dog extends Animal {
    constructor(name) {
        super(name);
    }
}

const animal = new Animal ('Simba');
const dog = new Dog ('Ozzi');

animal.speak();
dog.speak();