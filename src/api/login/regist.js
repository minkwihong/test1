import {setInterceptor} from '@/api/common/interceptor';
import {instance} from '@/api/common/http';

const newInstance = setInterceptor(instance);

/**
 *
 * @param data
 * @returns {*}
 */
const dulpChkEmail = function dulpChkEmail(data) {
	const { email } = data;
	const url = `/api/member/membercheck/${email}`;

	return newInstance.get(url);
};

export { dulpChkEmail };
