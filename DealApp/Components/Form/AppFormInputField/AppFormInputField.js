import React from 'react';
import {StyleSheet,StatusBar} from 'react-native';
import AppTextInput from '../AppTextInput';
import ErrorMessage from '../ErrorMessage';
import {useFormikContext} from 'formik';

const AppFormInputField=({name,width,...otherProps})=>{

    const {setFieldValue,values,setFieldTouched,errors,touched} =useFormikContext()


    return(
        <>
            <AppTextInput
                onBlur={()=>setFieldTouched(name)}
                // onChangeText={(text)=>setEmail(text)}
                // onChangeText={handleChange(name)}

                // These 2 below will help to remove text after reset
                onChangeText={text=> setFieldValue(name,text)}
                value={values[name]}

                {...otherProps}
                width={width}
            />

            <ErrorMessage error={errors[name]} visible={touched[name]}/>


        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});


export default AppFormInputField;



