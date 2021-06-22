import React from 'react';
import {View,Text,StyleSheet,StatusBar} from 'react-native';
import colors from '../../Assets/Colors'
const ListItemSeparator=()=>{
    return(
        <View style={styles.separator} />
    )
}

const styles = StyleSheet.create({
    separator: {
        width: "100%",
        height: 1,
        backgroundColor: colors.light,
    },
});


export default ListItemSeparator;



