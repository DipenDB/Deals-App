
import React,{useContext} from 'react'
import AuthContext from './AuthContext';
import AuthTokenSecureStorage from './SecureStorage';
import jwtDecode from 'jwt-decode';

export const useAuth =()=>{
    const {user,setUser} = useContext(AuthContext)

    const logIn=(authToken)=>{
        //decode jwt token
        const user = jwtDecode(authToken)

        //set decoded user to authContext
        setUser(user)
        // console.log(user)
        AuthTokenSecureStorage.storeToken(authToken)
    }

    const logOut =()=>{
        setUser(null);
        const remove =AuthTokenSecureStorage.removeToken();
    }

    return {user,setUser,logIn,logOut}
}
