import instance from './axiosInstance';

const profileAPI = {
    getUserProfile(id) {
        return instance.get(`profile/${id}`)
    }
};

export default profileAPI;