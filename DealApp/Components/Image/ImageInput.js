
import React from 'react';
import {View, Alert, StyleSheet, TouchableWithoutFeedback, Image} from 'react-native';
import colors from '../../Assets/Colors'
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import ImagePicker from "react-native-image-crop-picker";

const ImageInput=({ imageUri, onChangeImage})=>{
    const handlePress=()=>{
        if(!imageUri) selectImage();
        else Alert.alert("Delete",
            "Are you sure want to delete this image ?",
            [
                {text:'Yes', onPress:()=>onChangeImage(null)},
                {text: 'No'}
            ])
    }

    const selectImage=()=>{
        ImagePicker.openPicker({
            width: 200,
            height: 200,
            cropping: true,
            mediaType:'photo',
            compressImageQuality:0.5,
        }).then(image => {
            onChangeImage(image.path)
        });
    }

    return(
        <TouchableWithoutFeedback onPress={handlePress}>
            <View style={styles.imageContainer}>
                {!imageUri && (<MaterialIcon name='camera' size={40} color={colors.medium}/>)}

                {imageUri && <Image
                    source={{uri: imageUri}}
                    style={styles.image}
                />}
            </View>
        </TouchableWithoutFeedback>

    )
}

const styles = StyleSheet.create({
    imageContainer: {
        backgroundColor: colors.light,
        borderRadius:15,
        justifyContent:'center',
        alignItems:'center',
        height:100,
        width:100,
        overflow:'hidden'
    },
    image:{
        height: '100%',
        width: '100%'
    }
});


export default ImageInput;



