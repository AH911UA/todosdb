// localStorage.setItem('product1', [10, 123, 444, 232]);

// const KEY = 'user';
// const user = {
//     login: 'Gena',
//     password: 'qwe123'
// };

// const userString = JSON.stringify(user, null, 4);
// localStorage.setItem(KEY, userString);

// const user2 = {...user};
// const user2 = Object.assign({}, user);
// console.log(user2 === user);

// const userSave = JSON.parse(localStorage.getItem(KEY) || '{}');
// console.log(userSave);
// localStorage.removeItem(KEY);

// localStorage.clear();
// sessionStorage.setItem(KEY, userString)

let todos = null;
let todosElem = null;
document.addEventListener('DOMContentLoaded', () => {
    todos = new Todos();
    todosElem = document.querySelector('.todos');
    showTodos(todos.todos);
});

document.forms.addTodo
    .addEventListener('submit', function(event) {
        event.preventDefault();

        const value = this.elements.todo.value.trim();
        const id = Date.now();
        todos.push({ value, id });
        showTodos(todos.todos);

        this.reset();
    });

function showTodos(todos) {
    todosElem.innerHTML = '';
    todos.forEach(todo => 
        todosElem.append((new TodoComponent(todo)).element));
}


















