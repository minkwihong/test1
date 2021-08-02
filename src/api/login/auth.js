import { setInterceptor } from '@/api/common/interceptor';
import { instance } from '@/api/common/http';

const newInstance = setInterceptor(instance);

const loginProcess =  function login(data){
    return newInstance.post('/api/authenticate',data);
}

const loginSnsProcess =  function login(data){
    console.log('data type ==> ' + data.type)
    const type = data.type;
    const url = '/api/social/login/'+ type +'/login';

    return newInstance.get(url);
}

export { loginProcess , loginSnsProcess }