import {dulpChkEmail} from '../../api/login/regist';
// import constant from '@/constant';

export default {
	namespace: true,
	state: () => ({
		dulpEmailChk: false,
	}),
	getters: {
		getDulpEmailChk: state => state.dulpEmailChk,
	},
	mutations: {
		dulpChkEmail(state, res) {
			alert(res.data.resultCode);

			if (res.data.resultCode == 'OK') {
				state.dulpEmailChk = true;
			} else state.dulpEmailChk = false;
		},
	},
	actions: {
		async FETCH_DULP_EMAIL_CHK(context, payload) {
			const res = await dulpChkEmail(payload);
			alert(res);

			try {
				context.commit('dulpChkEmail', res);
			} catch (e) {
				alert(e);
			}

			return this.getters.getDulpEmailChk;
		},
	},
};
