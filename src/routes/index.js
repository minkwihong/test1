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
	console.log('before router go ==> ');
	const isAuthenticated = store.getters['getAuthenticated'];
	console.log('isAuthenticated ::: ' + isAuthenticated);

	if ((isAuthenticated && isAuth) || (!isAuthenticated && !isAuth)) {
		// true && true || false && false
		return next();
	} else {
		alert('홈화면으로');
		// 홈 화면으로 이동
		return next();
	}
};

export const router = new VueRouter({
	mode: 'history',
	routes: [
		{
			path: '/login',
			component: () => import('@/views/login/loginView'),
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
			component: () => import('@/views/user/dashboardView'),
			meta: { layout: 'LayoutDefault' },
			beforeEnter: beforeAuth(true),
		},
		{
			path: '/main',
			component: () => import('@/views/main/mainView'),
			meta: { layout: 'LayoutDefault' },
			//beforeEnter: beforeAuth(true),
		},
		{
			path: '/regist',
			component: () => import('@/views/login/registView'),
			meta: { layout: 'LayoutDefault' },
			//beforeEnter: beforeAuth(true),
		},
		{
			path: '/act',
			component: () => import('@/views/act/actView'),
			meta: { layout: 'LayoutDefault' },
			//beforeEnter: beforeAuth(true),
		},
		{
			path: '/sat',
			component: () => import('@/views/sat/satView'),
			meta: { layout: 'LayoutDefault' },
			//beforeEnter: beforeAuth(true),
		},
		{
			path: '/faq',
			component: () => import('@/views/faq/faqView'),
			meta: { layout: 'LayoutDefault' },
			//beforeEnter: beforeAuth(true),
		},
		{
			path: '/private',
			component: () => import('@/views/private/privateView'),
			meta: { layout: 'LayoutDefault' },
			//beforeEnter: beforeAuth(true),
		},
		{
			path: '/terms',
			component: () => import('@/views/private/termsView'),
			meta: { layout: 'LayoutDefault' },
			//beforeEnter: beforeAuth(true),
		},
	],
});
