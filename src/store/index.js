import Vue from 'vue';
import Vuex from 'vuex';
import { loginProcess } from '@/api/login/auth';
//import { setCookie } from '@/utils/utils';

Vue.use(Vuex);

export const store = new Vuex.Store({
	state: { // STATE
		email: '',
		role: '',
	},
	getters: { //GETTERS
		gettersEmail(state) {
			return state.email;
		},
		gettersRole(state) {
			return state.role;
		},
	},
	actions: { // 비동기
		async FECTH_GET_LOGIN({ commit }, data) {
			const loginData = await loginProcess(data);
			commit('COMMIT_GET_LOGIN', loginData);
		},
	},
	mutations: { // 동기
		COMMIT_GET_LOGIN(state, { data }) {
			state.email = data.userDetail.email;
			state.role = data.userDetail.role;
		},
	},
});
