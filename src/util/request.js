import axios from 'axios'

export function request(config) {
    const instance = axios.create({
        baseURL: "http://127.0.0.1:8000/api",
    })

    //请求拦截
    instance.interceptors.request.use((config) => {
        return config;
    }, err => {
        console.log(err);
    });

    //响应拦截
    instance.interceptors.response.use(res => {
        return res.data;
    }, err => {
        console.log(err);
    });

    return instance(config);
}