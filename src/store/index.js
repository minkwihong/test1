import Vue from 'vue';
import Vuex from 'vuex';
import auth from './login/auth';
import regist from './login/regist';

Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
		auth,
		regist,
	},
});
