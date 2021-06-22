import { create } from 'apisauce'
import cache from '../Components/Utility/cache';
import SecureStorage from '../AuthContext/SecureStorage'


const apiClient = create({
    baseURL: 'http://192.168.1.11:9000/api/',
})


apiClient.addAsyncRequestTransform(async(request)=>{
    const authToken = await SecureStorage.getToken();
    if (!authToken) return

    request.headers['x-auth-token']=authToken

} )




//To store in cache
const get = apiClient.get;
apiClient.get=async (url, params, axiosConfig)=>{
    const response = await get(url,params,axiosConfig)

    //If there is internet connection
    if (response.ok){
        const success = cache.store(url,response.data)
        return response
    }

    //If no internet connection
    const data = await cache.get(url)
    return data ? {ok:true,data} : response;

}


export default apiClient
