import React from 'react';
import {View,Text,StyleSheet,StatusBar} from 'react-native';
import AppText from '../Text/AppText';
import colors from '../../Assets/Colors'
import {useNetInfo} from "@react-native-community/netinfo";


const OfflineNotice=()=>{
    const netInfo = useNetInfo();
    // console.log(netInfo)

    if (netInfo.type!=='unknown' && netInfo.isInternetReachable==false) {
        return (

            <View style={styles.container}>
                <AppText style={{color: colors.white, fontWeight: 'bold'}}>No Internet Connection !!</AppText>
            </View>
        );
    }
    else {
        return null
    }



}

const styles = StyleSheet.create({
    container: {
        backgroundColor:colors.primary,
        height:50,
        width:'100%',
        position:'relative',
        zIndex:1,
        justifyContent:'center',
        alignItems:'center'
    },
});


export default OfflineNotice;



