import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native'
import AuthNavigator from './Navigations/AuthNavigator';
import navigationTheme from './Navigations/navigationTheme';
import OfflineNotice from './Components/OfflineNotice/OfflineNotice';
import AuthContext from './AuthContext/AuthContext';
import TabNavigator from './Navigations/TabNavigator';
import AuthTokenSecureStorage from './AuthContext/SecureStorage';
import jwtDecode from 'jwt-decode';


const DealsApp=()=>{
    const [user,setUser]=useState()

    useEffect(()=>{
        restoreUser()
    },[])

    const restoreUser =async ()=>{
        //get token and decode to get suer detail
        const user = await AuthTokenSecureStorage.getUser();
        if (user) setUser(user)
    }



    return(
        <AuthContext.Provider value={{user,setUser}}>
        <OfflineNotice/>
        <NavigationContainer theme={navigationTheme}>
            {user ? <TabNavigator/> : <AuthNavigator/>}
        </NavigationContainer>
        </AuthContext.Provider>
    )
}


export default DealsApp;



