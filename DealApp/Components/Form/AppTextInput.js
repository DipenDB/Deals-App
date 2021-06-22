import React from "react";
import { View, TextInput, StyleSheet,Platform } from "react-native";
import MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons'

import colors from '../../Assets/Colors'

function AppTextInput({ icon, width = "100%", ...otherProps }) {
    return (
        <View style={[styles.container, { width }]}>
            {icon && (
                <MaterialCommunityIcons
                    name={icon}
                    size={30}
                    color={colors.medium}
                    style={styles.icon}
                />
            )}
            <TextInput
                // placeholder='Name'
                placeholderTextColor={colors.textInput}
                style={styles.text}
                {...otherProps}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.light,
        borderRadius:25,
        flexDirection:'row',
        // padding:9,
        paddingHorizontal:15,
        paddingVertical:8,
        marginVertical:10,
        alignItems:'center'
    },
    icon: {
        marginRight: 10,
    },
    text:{
        fontSize:18,
        fontFamily:Platform.OS==='android' ? 'Roboto' : 'Avenir',
        color:colors.dark,
        // flexWrap: 'wrap'
        flexShrink: 1
    },

});

export default AppTextInput;
