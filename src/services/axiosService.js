// src/services/apiService.js

import axios from 'axios';
import router from '../routers';
import AppStorage from '../db/AppStorage';

const AxiosService = axios.create({
    headers: {
        'Content-Type': 'application/json',
    },
});
AxiosService.interceptors.request.use(config => {
    const token = AppStorage.getToken();
    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
}, error => {
    return Promise.reject(error);
});


AxiosService.interceptors.response.use(response => {
    return response;
}, error => {
    if (error.response && error.response.status === 401) {

        AppStorage.clear();
        this.$router.push({ name: "welcome" });
    }
    return Promise.reject(error);
});

export default {
    get(endpoint) {
        return AxiosService.get(endpoint);
    },
    post(endpoint, data) {
        return AxiosService.post(endpoint, data);
    },
    put(endpoint, data) {
        return AxiosService.put(endpoint, data);
    },
    delete(endpoint) {
        return AxiosService.delete(endpoint);
    },
};
