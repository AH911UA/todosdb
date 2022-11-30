// POST     - отправка данных
// GET      - получение данные 
// PUT      - изменяет данные (возможно все)
// DELETE   - удалить данные 
// PATH     - частично изменить данные 



// https://jsonplaceholder.typicode.com /todos/1
 
const env = {
    protocol: 'https',
    domain: 'jsonplaceholder.typicode.com'
}

const URLS = Object.freeze({
    TODOS: 'todos',
    COMMETS: 'comments',
    ALBUMS: 'albums',
    PHOTOS: 'photos',
    USERS: 'users'
});

class API {
    // https://jsonplaceholder.typicode.com 
    static baseURL = `${env.protocol}://${env.domain}`;

    static getSync(url) {
        const fullURL = `${API.baseURL}/${url}`;

        return fetch(fullURL);
    }

    static async get(url) {
        const fullURL = `${API.baseURL}/${url}`;
        try {
            const response = await fetch(fullURL);
            if (response.status >= 400) {
                throw 'Data not a found';
            }
            
            return await response.json();
        } catch (error) {
            console.error(error);
        }
    }
}













































