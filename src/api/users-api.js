import axios from 'axios';
import insctance from './api-instance';

const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return insctance.get(`users?page=${currentPage}&count=${pageSize}`)
    },

    getTotalCount() {
        return insctance.get(`users`)
    }
};

export default usersAPI;