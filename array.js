// Documentação
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array


// em javascript as listas podem receber qualquer tipo de dado
const nomes = ["Helder", "Victor", "Felix", 10, false];

// const helder = nomes[0]

// adiconando elementos no final da lista
// nomes.push("Pedro")

// adicionando elementos no início da lista
nomes.unshift('Talita')

// removendo o último valor da lista
nomes.pop()
nomes.pop()

// substituindo elementos da lista
nomes[2] = 'Thy'

// verificando o índice de um elemento
console.log(nomes.indexOf('Felix'))

// console.log(nomes)

// verificar a quantidade de itens
console.log (nomes.length)

// a variável é um Array?
const nomesIsArray = Array.isArray(nomes)

// ordenando os elementos alfabeticamente
const sortNomes = nomes.sort()

console.log(sortNomes)
console.log(nomesIsArray)

// o javascript só informa o index do elemente depois de impresso
// console.log(nomes.indexOf('Talita'))


// Principais métodos para listas
// Map, Filter e Reduce

const numbers = [1, 2, 3, 4, 5];

const numbersMultipliedbyTwo = numbers.map(function (number) {
    return number * 2;
});

const ages = [8, 13, 27, 30, 22, 40];

// pegar os números pares da lista ages
const evenAges = ages.filter(function(age){
    return age % 2 === 0;
});

// reduzir a listagem a um único valor
const sumOfAge = ages.reduce(function(age, accumulator){
    return accumulator + age
}, 0);

console.log(sumOfAge)