import { setInterceptor } from '@/api/common/interceptor';
import { instance } from '@/api/common/http';
import store from '@/store';

const newInstance = setInterceptor(instance);

const loginProcess = async function login(data){
    let isFlag = false;
    const response  = await newInstance.post('/api/authenticate',data);

    console.log('token ::: ' + response.data.token)
    if(response.status == 200){
        store.commit('setToken',response.data.token, {root : true});


        isFlag = true;
    }else isFlag = false;

    return isFlag;
}

export { loginProcess }