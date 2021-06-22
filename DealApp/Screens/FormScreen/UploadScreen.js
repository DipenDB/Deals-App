import React from 'react';
import {View,Text,StyleSheet,Modal} from 'react-native';
import AppText from '../../Components/Text/AppText';
import * as Progress from 'react-native-progress';
import colors from '../../Assets/Colors'
import LottieView from 'lottie-react-native';


const UploadScreen=({progress=0,visible=false,onDone})=>{
    return(
        <Modal visible={visible}>
            <View style={styles.container}>
                {progress<1 ?
                    (<Progress.Bar progress={progress} width={200} color={colors.primary}
                               indeterminateAnimationDuration={1500}/>)
                    :
                    (<LottieView
                        autoPlay
                        loop={false}
                        onAnimationFinish={onDone}
                        style={styles.animation}
                        source={require('../../Assets/Animation/done.json')}/>)
                }
            </View>
        </Modal>

    )
}

const styles = StyleSheet.create({
    animation:{
        width:300,
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default UploadScreen;



