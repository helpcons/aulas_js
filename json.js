// JSON

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

// Convertendo uma lista em JSON
const todosJSON = JSON.stringify(todos);

// Convertendo agora o JSON em lista novamente
const todosList = JSON.parse(todosJSON);


console.log(todosList)