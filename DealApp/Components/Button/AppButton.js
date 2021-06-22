import React from 'react';
import {View,Text,StyleSheet,StatusBar,TouchableOpacity} from 'react-native';
import colors from '../../Assets/Colors'

const AppButton=({title,onPress,color='primary'})=>{
    return(
        <TouchableOpacity style={[styles.button,{backgroundColor:colors[color]}]} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button:{
        backgroundColor: colors.primary,
        borderRadius:25,
        justifyContent: 'center',
        alignItems: 'center',
        padding:15,
        width:'100%',
        marginVertical:10,
    },
    text:{
        color:colors.white,
        textTransform:'uppercase',
        fontSize:18,
        fontWeight:'bold'

    },
});


export default AppButton;



