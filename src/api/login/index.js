import axios from 'axios';
import { setInterceptor } from '../interceptor';

const instance = axios.create({
	baseURL: process.env.VUE_APP_BASE_URL,
	timeout: 10000,
	headers: {
		'Content-Type': 'application/json;charset=utf-8',
		//'Content-Type': 'application/x-www-form-urlencoded',
		'Authorization' : ''
	},
});

const newInstance = setInterceptor(instance);

const getLogin = function getLogin(data) {
	return newInstance.post('/api/authenticate',data);
};

export { getLogin };
