// Loops de repetição

// for (let index = 0; index < 10; index++) {
//     console.log(index);
// };

// atribuindo o valor 0 a variável index
// let index = 0

// depois é passado o teste lógico index é menor que 10? se sim print o número
// index < 10

//  depois adicione mais 1 ao valor de index para cada repetição
//  index++

// ex02
// const cars = ['ferrari', 'tesla', 'mercedes']

// for (let i = 0; i < cars.length; i++) {
//     console.log(cars[i]);
// };


// Uma forma mais simples de se usar for com listas

// const carros = ['palio', 'uno', 'corsa', 'gol']

// for (let carro of carros) {
//     console.log(carro);
// };

// Outra forma de se fazer um for
// carros.forEach(function(carro, index){
//     console.log(index);
//     console.log(carro);
// });


// While

let index = 0;
while (index < 10) {
    console.log('Index é menor do que 10!');
    // index = index + 1
    // index += 1
    index++
};

const person = {
    nome: 'Iris',
    idade: 34
};

for (property in person) {
    console.log(person[property]);
};