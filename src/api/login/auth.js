import { setInterceptor } from '@/api/common/interceptor';
import { instance } from '@/api/common/http';

const newInstance = setInterceptor(instance);

const loginProcess = async function login(data){
    return newInstance.post('/api/authenticate',data);
}

export { loginProcess }