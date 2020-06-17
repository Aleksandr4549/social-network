import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '9dad525b-cde4-4427-9962-81c3bf5ca64b'
    }
});

export default instance;