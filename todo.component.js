class TodoComponent {
    #elem = null;

    constructor(todo) {
        this.#init(todo);
    }

    #init(todo) {
        const div = document.createElement('div');
        const h3 = document.createElement('h3');

        div.setAttribute('data-id', todo.id);
        div.classList.add('todo');
        h3.innerText = todo.value;

        div.append(h3);
        this.#elem = div;
    }

    get element() {
        return this.#elem;
    }
}