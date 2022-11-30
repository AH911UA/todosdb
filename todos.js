










class Todos {
    TODOS = 'TODOS';
    #todos = [];
    lsd = null;

    constructor() {
        this.lsd = new LSD(this.TODOS);
        this.#init();
    }

    async #init() {
        const initData = this.lsd.read();
        if (initData) {
            this.#todos = initData;
        }   

        const todo = await API.get(`${URLS.TODOS}/1`);
        console.log(todo);
        // API.getSync(`${URLS.TODOS}/1`)
        //     .then((response) => 
        //         response.status === 200 
        //             ? response.json()
        //             : new Error('Todos not a found')
        //     )
        //     .then((todo) => {
        //         console.log(todo);
        //     })
        //     .catch((error) => console.error(error));
    }

    push(obj) {
        if (!('value' in obj) || !('id' in obj)) {
            return;
        }

        if (this.lsd.write([...this.#todos, obj])) {
            this.#todos.push(obj);
        }
    }

    get todos() {
        return this.#todos;
    }
}