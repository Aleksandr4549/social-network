import instance from './axiosInstance';

const followedAPI = {
    follow(id) {
        return instance.post(`follow/${id}`)
    },
    unfollow(id) {
        return instance.delete(`follow/${id}`)
    }
};

export default followedAPI;