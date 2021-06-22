import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import PostScreen from '../Screens/FormScreen/PostScreen';
import FeedNavigator from './FeedNavigator';
import AccountNavigator from './AccountNavigator';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import {color} from 'react-native-reanimated';
import NewListingButton from './NewListingButton';


const Tab = createBottomTabNavigator()

const TabNavigator=()=>(
    <Tab.Navigator>
        <Tab.Screen
            name='Feed'
            component={FeedNavigator}
            options={{
                tabBarIcon:({color,size})=> <MaterialIcon name='home' color={color} size={size}/>
            }}
        />

        <Tab.Screen
            name='ListingEdit'
            component={PostScreen}
            options={({navigation})=>({
                tabBarButton:()=><NewListingButton onPress={()=>navigation.navigate('ListingEdit')}/>,
                tabBarIcon:({color,size})=> <MaterialIcon name='plus-circle' color={color} size={size}/>
            })}
        />

        <Tab.Screen
            name='Account'
            component={AccountNavigator}
            options={{
                tabBarIcon:({color,size})=> <MaterialIcon name='account' color={color} size={size}/>
            }}
        />
    </Tab.Navigator>
)

export default TabNavigator
