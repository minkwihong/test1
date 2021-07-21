// 쿠키 셋팅
const setCookie = function(name, value, exp) {
	var date = new Date();
	date.setTime(date.getTime() + exp * 24 * 60 * 60 * 1000);
	document.cookie =
		name + '=' + value + ';expires=' + date.toUTCString() + ';path=/';
};

//
//setCookie('expend', 'true', 1);

/**쿠키가져오기 */
const getCookie = function(name) {
	var value = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
	return value ? value[2] : null;
};

/**쿠키삭제 */
const deleteCookie = function(name) {
	document.cookie = name + '=; expires=Thu, 01 Jan 1999 00:00:10 GMT;';
};

export { setCookie, getCookie, deleteCookie };
