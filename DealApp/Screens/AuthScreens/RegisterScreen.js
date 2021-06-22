import React,{useState} from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";
import Screen from '../../Components/Screen/Screen';
import FormikForm from '../../Components/FormikForm/FormikForm';
import AppFormInputField from '../../Components/Form/AppFormInputField/AppFormInputField';
import SubmitButton from '../../Components/Form/SubmitButton';
import {useAuth} from '../../AuthContext/useAuth';
import registerApi from '../../api/registerApi';
import authApi from '../../api/authApi';


const validationSchema = Yup.object().shape({
    name: Yup.string().required().label("Name"),
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password"),
});

function RegisterScreen() {

    const {logIn} =useAuth();
    const [error,setError] = useState()

    const handleSubmit =async (userInfo)=>{
        const result =await registerApi.register(userInfo);

        if (!result.ok){
            if (result.data) setError(result.data.error)
            else {
                setError("An unexpected error occurred.")
                console.log(result)
            }
            return;
        }

        //To directly login after register
        const {data:authToken}=await authApi.login(userInfo.email,userInfo.password);
        //To save token to secure storage for future use
        logIn(authToken)

    }


    return (
        <Screen style={styles.container}>
            <FormikForm
                initialValues={{ name: "", email: "", password: "" }}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
            >
                <AppFormInputField
                    autoCorrect={false}
                    icon="account"
                    name="name"
                    placeholder="Name"
                />
                <AppFormInputField
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="email"
                    keyboardType="email-address"
                    name="email"
                    placeholder="Email"
                    textContentType="emailAddress"
                />
                <AppFormInputField
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="lock"
                    name="password"
                    placeholder="Password"
                    secureTextEntry
                    textContentType="password"
                />
                <SubmitButton title="Register" />
            </FormikForm>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
});

export default RegisterScreen;
