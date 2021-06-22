
import SecureStorage from 'react-native-secure-storage'
import jwtDecode from 'jwt-decode';

const key ='authToken'

const storeToken = async (authToken) =>{
    try {
        await SecureStorage.setItem(key,authToken)
    }
    catch (e) {
        console.log('Error on saving auth token',e)
    }
}

const getToken = async () =>{
    try {
        return  await SecureStorage.getItem(key)
    }
    catch (e) {
        console.log('Error on getting auth token',e)
    }
}

const getUser = async ()=>{
    const token = await getToken();

    return (token)? jwtDecode(token) : null
}





const removeToken = async () =>{
    try {
        await SecureStorage.removeItem(key)
    }
    catch (e) {
        console.log('Error on removing auth token',e)
    }
}

export default {
    getToken,
    getUser,
    removeToken,
    storeToken
}
