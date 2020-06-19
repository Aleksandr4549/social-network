import instance from './axiosInstance';

const loginAPI = {
    login(email, password, rememberMe = false) {
        return instance.post(`auth/login?email=${email}&password=${password}&rememberMe=${rememberMe}`)
    },
    logout() {
        return instance.delete()
    }  
};

export default loginAPI;