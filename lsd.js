class LSD {
    #key = null;
    
    constructor(key) {
        this.#key = key;    
    }

    write(obj) {
        if (!obj) {
            return false;
        }

        try {
            localStorage.setItem(this.#key, JSON.stringify(obj));
            return true;
        } catch (error) {
            console.error('[write] ', error);
            return false;
        }
    }

    read() {
        const ls = localStorage.getItem(this.#key);
        if (!ls) {
            return false;
        }
        try {
            return JSON.parse(ls);
        } catch (error) {
            console.error('[read] ', error);
            return false;
        }
    }
}