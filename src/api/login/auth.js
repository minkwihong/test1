import { setInterceptor } from '@/api/common/interceptor';
import { instance } from '@/api/common/http';

const newInstance = setInterceptor(instance);

/**
 * 일반 로그인 처리
 * @param data
 * @returns {*}
 */
const loginProcess = function login(data) {
	return newInstance.post('/api/authenticate', data);
};

/**
 * SNS 로그인 처리
 * @param data
 * @returns {*}
 */
const loginSnsProcess = function login(data) {
	console.log('data type ==> ' + data.type);
	const type = data.type;
	const url = '/api/social/login/' + type + '/login';

	return newInstance.get(url);
};

/**
 * 이메일 체크
 * @param data
 * @returns {*}
 */
const chkEmail = function login(data) {
	const url = '/api/member/resetPassword';

	return newInstance.post(url, data);
};

export { loginProcess, loginSnsProcess, chkEmail };
