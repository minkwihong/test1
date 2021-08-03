import { loginProcess ,loginSnsProcess ,chkEmail } from "../api/login/auth";
// import constant from '@/constant';

export default {
    namespace : true,
    state : () => ({
        token : localStorage.getItem("token")
        ,userDetails : localStorage.getItem("userDetails")
        ,authenticated : !!localStorage.getItem("token")
        ,isAuth : ''
        ,emailChk : false
    }),
    getters: {
        getToken: (state) => state.token,
        getAuthenticated: (state) => state.authenticated,
        getIsAuth: (state) => state.isAuth,
        getUserDetails: (state) => state.userDetails,
        getEmailChk: (state) => state.emailChk
    },
    mutations : {
        setToken(state,payload){

            localStorage.setItem('token',payload.token); // localstorage 저장
            localStorage.setItem('userDetails',payload.userDetails); // localstorage 저장
            localStorage.getItem("token") !== null ? state.authenticated = true : state.authenticated = false;
            state.isAuth = true;
        },
        deleteToken(state){

            localStorage.removeItem('token'); // localstorage 저장
            localStorage.removeItem('userDetails'); // localstorage 저장
            state.token = '';
            state.userDetails = '';
            state.authenticated = false;

            state.isAuth = false;
        },
        emailChk(state,{data}){
            if(data == 'OK'){
                state.emailChk = true;
            }else state.emailChk = false;
        }
    },
    actions : {
        async FETCH_LOGIN_USER(context,payload){

            try{
                const response = await loginProcess(payload);

                if(response.status == 200){
                    context.commit('setToken', response.data);
                }

                return this.getters.getIsAuth;
            }catch(e){
                alert('아이디, 비밀번호를 확인해주세요.' + e)
            }

        },
        async FETCH_SNS_LOGIN_USER(context,payload){

            try{
                const response = await loginSnsProcess(payload)
                if(response.status == 200){
                    context.commit('setToken', response.data);
                }

                return this.getters.getIsAuth;
            }catch(e){
                alert(e)
            }
        },
        FETCH_LOGOUT(context){

            context.commit('deleteToken');

            return this.getters.getIsAuth;
        },
        async FETCH_EMAIL_CHK(context,payload){
            const response = await chkEmail(payload);

            try{
                if(response.status == 200) {
                    context.commit('emailChk', response);
                }
            }catch(e){
                alert(e)
            }

            return this.getters.getEmailChk;
        }

    }
}
