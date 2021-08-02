import {loginProcess } from "../api/login/auth";
import {loginSnsProcess } from "../api/login/auth";

export default {
    namespace : true,
    state : () => ({
        token : localStorage.getItem("token")
        ,userDetails : localStorage.getItem("userDetails")
        ,isAuth : !!localStorage.getItem("token")
    }),
    getters : {
        getToken: (state) => {
            return state.token;
        },
        getUserDetails: (state) => {
            return state.userDetails;
        },
        getAuthenticated: (state) => {
            return state.authenticated;
        }
    },
    mutations : {
        setToken(state,payload){

            console.log('token ::: ' + payload.token)
            console.log('userDetails ::: ' + payload.userDetails.email)
            state.token = payload.token;
            state.userDetails = payload.userDetails;
            localStorage.setItem('token',state.token); // localstorage 저장
            localStorage.setItem('userDetails',state.userDetails); // localstorage 저장

            this.state.isAuth = true;
        }
    },
    actions : {
        async FETCH_LOGIN_USER(context,payload){

            try{
                const response = await loginProcess(payload);

                if(response.status == 200){
                    context.commit('setToken', response.data);
                }else this.state.isAuth = false;

                return this.state.isAuth;
            }catch(e){
                alert('아이디, 비밀번호를 확인해주세요.' + e)
            }

        },
        async FETCH_SNS_LOGIN_USER(context,payload){

            try{
                const response = await loginSnsProcess(payload)
                if(response.status == 200){
                    context.commit('setToken', response.data);
                }else this.state.isAuth = false;

                return this.state.isAuth;
            }catch(e){
                alert(e)
            }
        }

    }
}