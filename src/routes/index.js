import VueRouter from 'vue-router';
import Vue from 'vue';

Vue.use(VueRouter);

export const router = new VueRouter({
	mode: 'history',
	routes: [
		{
			path: '/login',
			component: () => import('@/components/login/loginForm'),
			meta: { layout: 'LayoutDefault' },
		},
		{
			path: '/',
			redirect: '/login',
		},
		{ path: '*', component: () => import('@/views/error/error404') },
		{
			path: '/user/dashboard',
			component: () => import('@/components/user/dashboardForm'),
			meta: { layout: 'LayoutDefault' },
		},
	],
});
