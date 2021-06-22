import React, {useState} from 'react';
import {StyleSheet,Image} from 'react-native';
import Screen from '../../Components/Screen/Screen';
import * as Yup from 'yup'
import AppFormInputField from '../../Components/Form/AppFormInputField/AppFormInputField';
import SubmitButton from '../../Components/Form/SubmitButton';
import FormikForm from '../../Components/FormikForm/FormikForm';
import authApi from '../../api/authApi';
import ErrorMessage from '../../Components/Form/ErrorMessage';
import {useAuth} from '../../AuthContext/useAuth';

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password"),
});



const LoginScreen=(props)=>{


    // const authContext = useContext(AuthContext);
    //Alternative using Custom Hook
    const {logIn} = useAuth();

    const [loginFailed,setLoginFailed] =useState(false)

    const handleSubmit=async ({email,password})=>{
        const result = await authApi.login(email,password)

        if (!result.ok){
            return setLoginFailed(true)
        }
        setLoginFailed(false)

        // //decode jwt token
        // const user = jwtDecode(result.data)
        // //set decoded user to authContext
        // authContext.setUser(user)
        // // console.log(user)
        // await AuthTokenSecureStorage.storeToken(result.data)

        //Transfer token to decode and store user info...alternative of above 3 code
        logIn(result.data)
    }



    return(
        <Screen style={styles.container}>
            <Image style={styles.logo} source={require("../../Assets/Images/logo-red.png")} />


            <FormikForm
                initialValues={{email:'',password:''}}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
            >

                <ErrorMessage visible={loginFailed} error="Invalid email and/or password."/>

                        <AppFormInputField
                            autoCapitalize='none'
                            autoCorrect={false}
                            icon='email'

                            name='email'

                            keyboardType='email-address'
                            placeholder='Email'
                            textContentType='emailAddress'
                        />


                        <AppFormInputField
                            autoCapitalize='none'
                            autoCorrect={false}
                            icon='lock'

                            name='password'

                            placeholder='Password'
                            secureTextEntry
                            textContentType='password'
                        />

                        <SubmitButton title='Login'/>



            </FormikForm>





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


export default LoginScreen;



