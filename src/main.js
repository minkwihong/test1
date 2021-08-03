import Vue from 'vue';
import App from './App.vue';
import { router } from '@/routes/index';
import store from '@/store';
import spinner from '@/common/spinner';

Vue.config.productionTip = false;

new Vue({
	router,
	store,
	spinner,
	render: h => h(App),
}).$mount('#app');
