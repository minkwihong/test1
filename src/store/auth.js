import { loginProcess } from "../api/login/auth";
import { loginSnsProcess } from "../api/login/auth";

export default {
    namespace : true,
    state : () => ({
        token : localStorage.getItem("token")
        ,userDetails : localStorage.getItem("userDetails")
        ,authenticated : !!localStorage.getItem("token")
        ,isAuth : ''
    }),
    getters: {
        getToken: (state) => state.token,
        getAuthenticated: (state) => state.authenticated,
        getIsAuth: (state) => state.isAuth,
        getUserDetails: (state) => state.userDetails,
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
        }

    }
}
