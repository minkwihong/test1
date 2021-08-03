import VueRouter from 'vue-router';
import Vue from 'vue';
import store from '@/store';
//import {PERMIT_ALL} from '@/constant';

Vue.use(VueRouter);

/**
 * vue router 인증체크
 * @param isAuth
 * @returns {(function(*, *, *): (*))|*}
 */
const beforeAuth = isAuth => (from, to, next) => {
	console.log('before router go ==> ')
	const isAuthenticated = store.getters["getAuthenticated"]
	console.log('isAuthenticated ::: ' + isAuthenticated)


	if ((isAuthenticated && isAuth) || (!isAuthenticated && !isAuth)) { // true && true || false && false
		return next()
	} else {
		alert('홈화면으로');
		// 홈 화면으로 이동
		return next()
	}
}

export const router = new VueRouter({
	mode: 'history',
	routes: [
		{
			path: '/login',
			component: () => import('@/components/login/loginForm'),
			meta: { layout: 'LayoutDefault' },
			//beforeEnter: beforeAuth(false),
		},
		{
			path: '/',
			redirect: '/main',
		},
		{ path: '*', component: () => import('@/views/error/error404') },
		{
			path: '/user/dashboard',
			component: () => import('@/components/user/dashboardForm'),
			meta: { layout: 'LayoutDefault' },
			beforeEnter: beforeAuth(true),
		},
		{
			path: '/main',
			component: () => import('@/components/main/mainForm'),
			meta: { layout: 'LayoutDefault' },
			//beforeEnter: beforeAuth(true),
		},
	],
});
