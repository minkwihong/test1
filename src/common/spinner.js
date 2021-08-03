import VueLoading from 'vuejs-loading-plugin';
import Vue from 'vue';
import spinner from '@/components/common/spinner';

// using default options
Vue.use(VueLoading);

// overwrite defaults
Vue.use(VueLoading, {
	dark: true, // default false
	text: 'Ladataan', // default 'Loading'
	loading: true, // default false
	customLoader: spinner, // replaces the spinner and text with your own
	background: 'rgb(255,255,255)', // set custom background
	classes: ['myclass'], // array, object or string
});
