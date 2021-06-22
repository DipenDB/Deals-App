import React from 'react';
import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";
import AppButton from '../../Components/Button/AppButton';
const WelcomeScreen=({navigation})=>{
    return(
        <ImageBackground
            blurRadius={10}
            style={styles.background}
            source={require("../../Assets/Images/background.jpg")}
        >
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require("../../Assets/Images/logo-red.png")} />
                <Text style={styles.tagLine}>Sell What You Don't Need</Text>
            </View>
            <View style={styles.buttonContainer}>
                <AppButton title='Login' onPress={()=>navigation.navigate('Login')} />
                <AppButton title='Register' color='secondary' onPress={()=>navigation.navigate('Register')}/>
            </View>
            {/*<View style={styles.loginButton}></View>*/}
            {/*<View style={styles.registerButton}></View>*/}
        </ImageBackground>

    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    buttonContainer:{
        width:'100%',
        padding:20,
    },

    logo: {
        width: 100,
        height: 100,
    },
    logoContainer: {
        position: "absolute",
        top: 70,
        alignItems: "center",
    },
    tagLine:{
        fontSize:20,
        fontWeight:'bold',
        paddingVertical:20,
    },

});


export default WelcomeScreen;



