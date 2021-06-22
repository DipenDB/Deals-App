import React from 'react';
import {StyleSheet,Image} from 'react-native';
import Screen from '../../Components/Screen/Screen';
import * as Yup from 'yup'
import {Formik} from 'formik';
import AppTextInput from '../../Components/Form/AppTextInput';
import AppButton from '../../Components/Button/AppButton';
import AppText from '../../Components/Text/AppText';
import ErrorMessage from '../../Components/Form/ErrorMessage';


const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password"),
});



const TestLoginScreen=()=>{



    return(
        <Screen style={styles.container}>
            <Image style={styles.logo} source={require("../../Assets/Images/logo-red.png")} />


            <Formik
                initialValues={{email:'',password:''}}
                onSubmit={values => console.log(values)}
                validationSchema={validationSchema}
            >

                {({handleChange,handleSubmit,errors,setFieldTouched,touched})=>(
                    <>

                        <AppTextInput
                            autoCapitalize='none'
                            autoCorrect={false}
                            icon='email'
                            // name='email'
                            onBlur={()=>setFieldTouched('email')}
                            // onChangeText={(text)=>setEmail(text)}
                            onChangeText={handleChange('email')}
                            keyboardType='email-address'
                            placeholder='Email'
                            textContentType='emailAddress'
                        />

                        <ErrorMessage error={errors.email} visible={touched.email}/>

                        {/*{errors.email && <AppText style={{color: 'red'}}>{errors.email}</AppText>}*/}
                        <AppTextInput
                            autoCapitalize='none'
                            autoCorrect={false}
                            icon='lock'
                            // name='email'
                            onBlur={()=>setFieldTouched('password')}
                            // onChangeText={(text)=>setPassword(text)}
                            onChangeText={handleChange('password')}
                            placeholder='Password'
                            secureTextEntry
                            textContentType='password'
                        />
                        <ErrorMessage error={errors.password} visible={touched.password}/>

                        {/*{errors.password && <AppText style={{color: 'red'}}>{errors.password}</AppText>}*/}


                        <AppButton title='Login' onPress={handleSubmit}/>






                    </>
                )}



            </Formik>





        </Screen>

    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    logo: {
        width: 80,
        height: 80,
        alignSelf: "center",
        marginTop: 50,
        marginBottom: 20,
    },
});


export default TestLoginScreen;



