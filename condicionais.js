// Condicionáis

// ex01
// const sum = 1 + 1;

// if (sum === 2) {
//     console.log('Sum is 2!');
// };

// ex02
// const sum = 1 + 3;

// if (sum === 2) {
//     console.log('Sum is 2!');
// } else {
//     console.log('Sum is not 2!')
// };

// ex03
// const sum = 1 + 2;

// if (sum === 2) {
//     console.log('Sum is 2!');
// } else if (sum === 3) {
//     console.log('Sum is 3!');
// } else {
//     console.log('Sum in not 2!')
// };

// && - and
// || - or

// const sum1 = 2 + 2;
// const sum2 = 3 + 3;

// // é necessário que ambas as condições sejam verdadeiras para o and (&&)
// if (sum1 === 4 && sum2 === 6) {
//     console.log('Sum1 is 4 and sum2 is 6!');
// };

// // para or basta que uma condição seja verdadeira
// if (sum1 === 4 || sum2 === 6) {
//     console.log('Sum1 is 4 or sum2 is 6!')
// };

// Ternary operator

// const sum = 1 + 1;
// let number;

// if (sum === 2) {
//     number = 2;
// } else {
//     number = 4;
// };

// é a mesma coisa que o código acima
// aplicação do ternary operator
// let number = sum === 2 ? 2 : 4;

// console.log(number)

// aplicação do switch

const car = 'Tesla';

switch (car) {
    case 'Mercedes':
        console.log('Mercedes is beautiful!');
        break;
    case 'Ferrari':
        console.log('Ferrari is red!');
        break;
    case 'Tesla':
        console.log('Tesla is smart!');
        break;
};