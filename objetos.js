// Objetos em JavaScript

// const person = {
//     firstName: 'Helder',
//     lastName: 'Constancio',
//     age: '34',
//     hobbies: ['ler', 'assistir dorama', 'comer']
// };

// console.log(person);

// Acessar os elementos do Objeto person

// const firstName = person.firstName;
// const lastName = person.lastName;
// const eat = person.hobbies[2];

// console.log(firstName);
// console.log(lastName);
// console.log(eat);

// Entendendo Destructuring
// const {firstName, lastName, age, hobbies} = person;

// console.log(firstName);
// console.log(lastName);
// console.log(age);
// console.log(hobbies);

// Adicionando elementos no objeto
// person.dog = 'Simba'

const person = {
    firstName: 'Helder',
    lastName: 'Constancio',
    age: '34',
    hobbies: ['ler', 'assistir dorama', 'comer'],
    dog: {
        nome: 'Simba',
        age: 4
    }
};

// const {firstName, lastName, age, hobbies, dog} = person;

// podemos trocar o nome da variável para
// const {firstName: primeiroNome, lastName, age, hobbies, dog} = person;

// Fazendo o destructuring dentro de um destructuring
const {firstName: primeiroNome, lastName, age, hobbies, dog: {nome}} = person;

console.log(person.dog.age);


// Listas com objetos

const todos = [
    {
        id: 1,
        description: 'Estudar Programação',
        isCompleted: false,
    },
    {
        id: 2,
        description: 'Ler',
        isCompleted: true,
    },
    {
        id:3,
        description: 'Treinar',
        isCompleted: true,
    }
];

console.log(todos[2].description)