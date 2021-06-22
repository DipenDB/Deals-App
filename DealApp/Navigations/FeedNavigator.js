import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ListingScreen from '../Screens/ListingScreen/ListingScreen';
import ListingDetailScreen from '../Screens/ListingScreen/ListingDetailScreen';


const Stack=createStackNavigator();

const FeedNavigator=()=>(
    <Stack.Navigator mode='modal'>
        <Stack.Screen name='Listings' component={ListingScreen} options={{headerShown:false}}/>
        <Stack.Screen name='ListingDetails' component={ListingDetailScreen} />
    </Stack.Navigator>
)

export default FeedNavigator
