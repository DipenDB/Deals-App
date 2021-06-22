import React from 'react';
import { View, StyleSheet,Text, Image ,TouchableHighlight} from "react-native";
import Swipeable from 'react-native-gesture-handler/Swipeable';
import colors from "../../Assets/Colors";
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import AppText from '../Text/AppText';


const ListItem=({ title, subTitle, style, image,ImageComponent,onPress,renderRightActions })=>{
    return(
        <Swipeable renderRightActions={renderRightActions}>
            <TouchableHighlight
                underlayColor={colors.light}
                onPress={onPress}>
                <View style={[styles.container,style]}>
                    {ImageComponent}
                    {image && <Image style={styles.image} source={image}/>}
                    <View style={styles.textContainer}>
                        <AppText style={styles.title} numberOfLines={1}>{title}</AppText>
                        {subTitle && <AppText style={styles.subTitle} numberOfLines={2}>{subTitle}</AppText>}
                    </View>

                    <MaterialIcon
                        name='chevron-right'
                        size={25}
                        color={colors.medium}
                    />


                </View>
            </TouchableHighlight>
        </Swipeable>


    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection: "row",
        padding:15,
        alignItems:'center',

    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
    },
    textContainer:{
        marginLeft:10,
        justifyContent:'center',
        flex:1
    },
    subTitle: {
        color: colors.medium,
    },
    title: {
        fontWeight: "bold",
    },

});


export default ListItem;



