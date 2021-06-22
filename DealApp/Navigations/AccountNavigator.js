import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AccountScreen from '../Screens/AccountScreen/AccountScreen';
import MessagesScreen from '../Screens/MessagesScreen/MessagesScreen';

const Stack=createStackNavigator();

const AccountNavigator=()=>(
    <Stack.Navigator>
        <Stack.Screen name='Account' component={AccountScreen} options={{headerShown:false}}/>
        <Stack.Screen name='Messages' component={MessagesScreen} />
    </Stack.Navigator>
)

export default AccountNavigator
