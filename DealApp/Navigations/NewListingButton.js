import React from 'react';
import {View,StyleSheet,TouchableOpacity} from 'react-native';
import colors from '../Assets/Colors'
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons'

const NewListingButton=({onPress})=>{
    return(
        <TouchableOpacity onPress={onPress}>
        <View style={styles.container}>
            <MaterialIcon name='plus-circle' color={colors.white} size={40}/>
        </View>
        </TouchableOpacity>

    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: colors.primary,
        borderColor:colors.white,
        borderRadius:40,
        borderWidth:10,
        bottom:27,
        height:80,
        width:80,
        justifyContent: 'center',
    },
});


export default NewListingButton;



