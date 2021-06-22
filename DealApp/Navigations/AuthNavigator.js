
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import WelcomeScreen from '../Screens/AuthScreens/WelcomeScreen';
import LoginScreen from '../Screens/AuthScreens/LoginScreen';
import RegisterScreen from '../Screens/AuthScreens/RegisterScreen';

const Stack = createStackNavigator();

const AuthNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen
            name="Welcome"
            component={WelcomeScreen}
            options={{ headerShown: false }}
        />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
);

export default AuthNavigator;
