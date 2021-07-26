import axios from 'axios';

const instance = axios.create({
    baseURL: process.env.VUE_APP_BASE_URL,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json;charset=utf-8',
        //'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization' : ''
    },
})

export  { instance };