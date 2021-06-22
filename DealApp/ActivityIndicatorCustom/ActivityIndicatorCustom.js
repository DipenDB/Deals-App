import React from 'react';
import LottieView from 'lottie-react-native';


const ActivityIndicatorCustom=({animating=false})=>{
    if (!animating) return null

    return <LottieView
        autoPlay
        loop
        source={require('../Assets/Animation/loader.json')}/>
}



export default ActivityIndicatorCustom;



