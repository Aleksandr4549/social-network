import instance from './axiosInstance';

const authAPI = {
    me() {
        return instance.get('auth/me')
    },
    login(email, password, rememberMe) {
        return instance.post(`auth/login?email=${email}&password=${password}&rememberMe=${rememberMe}`)
    },
    logout() {
        return instance.delete('auth/login')
    }
};

export default authAPI;