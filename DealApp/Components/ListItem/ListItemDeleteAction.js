import React from 'react';
import {View, Text, StyleSheet, StatusBar, TouchableWithoutFeedback} from 'react-native';
import colors from '../../Assets/Colors'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const ListItemDeleteAction=({onPress})=>{
    return(
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.container}>
                <Icon name="trash-can" color={colors.white} size={35}/>
            </View>
        </TouchableWithoutFeedback>


    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.danger,
        width:70,
        justifyContent:'center',
        alignItems:'center'
    },
});


export default ListItemDeleteAction;



