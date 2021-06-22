import React from 'react';
import {View,Text,StyleSheet,FlatList} from 'react-native';

import colors from '../../Assets/Colors'
import Screen from '../../Components/Screen/Screen';
import ListItem from '../../Components/ListItem/ListItem';
import Icon from '../../Components/Icon/Icon';
import ListItemSeparator from '../../Components/ListItem/ListItemSeparator';
import {useAuth} from '../../AuthContext/useAuth';

const menuItems=[
    {
        title: 'My Finding',
        icon: {
            name: 'format-list-bulleted',
            backgroundColor: colors.primary
        },
    },
    {
        title:'My Messages',
        icon:{
            name:'email',
            backgroundColor: colors.secondary
        },
        targetScreen:'Messages'
    }
]



const AccountScreen=({navigation})=>{

    const {user,logOut} = useAuth();


    // logOut is used from custom hook useAuth------------
    // const handleLogout=()=>{
    //     setUser(null);
    //     const remove =AuthTokenSecureStorage.removeToken();
    // }


    return(
        <Screen style={styles.screen}>
            <View style={styles.container}>
                <ListItem
                    style={{backgroundColor:'#fff'}}
                    title={user.name}
                    subTitle={user.email}
                    image={require('../../Assets/Images/mosh.jpg')}

                />
            </View >

            <View style={styles.container}>
                <FlatList
                    data={menuItems}
                    keyExtractor={item=>item.title}
                    ItemSeparatorComponent={ListItemSeparator}
                    renderItem={({item})=>
                        // console.log(item.icon.name)
                        <ListItem
                            style={{backgroundColor:'#fff'}}

                            title={item.title}

                            // ImageComponent={
                            //     <Icon
                            //         name='email'
                            //         size={50}
                            //         backgroundColor='red'
                            //         iconColor='white'
                            //     />
                            // }


                            ImageComponent={
                                <Icon
                                    name= {item.icon.name}
                                    backgroundColor={item.icon.backgroundColor}
                                />
                            }

                            onPress={()=>navigation.navigate(item.targetScreen)}

                        />
                    }

                />
            </View>


            <View style={styles.container}>
                <ListItem
                    title='Log Out'
                    style={{backgroundColor:'#fff'}}

                    // onPress={handleLogout}
                    onPress={()=>logOut()}
                    ImageComponent={
                        <Icon
                            name='logout'
                            backgroundColor='#ffe66d'

                        />
                    }

                />
            </View>

        </Screen>

    )
}

const styles = StyleSheet.create({
    screen:{
        backgroundColor:colors.light
    },
    container: {
        marginVertical:20,
        // backgroundColor: '#fff',
    },
});


export default AccountScreen;



