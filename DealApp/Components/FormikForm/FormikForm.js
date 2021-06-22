import React from 'react';
import {View,Text,StyleSheet,StatusBar} from 'react-native';
import {Formik} from 'formik';

const FormikForm=({initialValues,onSubmit,validationSchema,children})=>{
    return(
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >
            {({})=>(
                <>
                    {children}
                </>
            )}
        </Formik>

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


export default FormikForm;



