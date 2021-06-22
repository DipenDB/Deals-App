import React from "react";
import { View,Image, StyleSheet,TouchableWithoutFeedback } from "react-native";

import colors from "../../Assets/Colors";
import AppText from '../Text/AppText';

function Card({ title, subTitle, imageUrl,onPress }) {
    console.log('Card : ',imageUrl)
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.card}>
                <Image style={styles.image} source={{uri: imageUrl}} />
                {/*<Image style={styles.image} uri={imageUrl} />*/}
                <View style={styles.detailsContainer}>
                    <AppText style={styles.title} numberOfLines={1}>{title}</AppText>
                    <AppText style={styles.subTitle}numberOfLines={1}>{subTitle}</AppText>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 15,
        backgroundColor: colors.white,
        marginBottom: 20,
        overflow: "hidden",
    },
    detailsContainer: {
        padding: 20,
    },
    image: {
        width: "100%",
        height: 200,
    },
    subTitle: {
        color: colors.secondary,
        fontWeight: "bold",
    },
    title: {
        marginBottom: 7,
    },
});

export default Card;