import Vue from 'vue';
import Vuex from 'vuex';
import { getLogin } from '@/api/login/index';
//import { setCookie } from '@/utils/utils';

Vue.use(Vuex);

export const store = new Vuex.Store({
	state: {
		dsId: '',
	},
	getters: {
		gettersDsId(state) {
			return state.dsId;
		},
	},
	actions: {
		async FECTH_GET_LOGIN({ commit }, data) {
			const loginData = await getLogin(data);
			commit('COMMIT_GET_LOGIN', loginData);
		},
	},
	mutations: {
		COMMIT_GET_LOGIN(state, { data }) {
			state.dsId = data.data.resultVal.dsId;
		},
	},
});
