import React,{useState,useEffect} from 'react';
import {StyleSheet,FlatList} from 'react-native';
import colors from '../../Assets/Colors'
import ListingApi from '../../api/listingsApi'
import Screen from '../../Components/Screen/Screen';
import Card from '../../Components/Card/Card';
import listingsApi from '../../api/listingsApi';
import AppText from '../../Components/Text/AppText';
import AppButton from '../../Components/Button/AppButton';
import ActivityIndicatorCustom from '../../ActivityIndicatorCustom/ActivityIndicatorCustom';
import {useLoading} from '../../Components/hooks/useLoading';

//
// const Listings=[
//     {
//         id:1,
//         title:'Red Jacket for sale',
//         price :100,
//         image:require('../../Assets/Images/jacket.jpg')
//     },
//     {
//         id:2,
//         title:'Couch in great condition',
//         price :1000,
//         image:require('../../Assets/Images/couch.jpg')
//     }
// ]




const ListingScreen=({navigation})=>{

    const {data:listings,error,loading,request:loadListings} =useLoading(listingsApi.getListings())

    // const [listings,setListings]=useState([])
    // const [error,setError]=useState(false)
    // const [loading,setLoading]=useState(false)

    // console.log(listings)

    useEffect(()=>{
        const load= loadListings()
    },[])

    // const loadListings =async ()=>{
    //     setLoading(true)
    //     const response =await listingsApi.getListings()
    //     setLoading(false)
    //
    //     if (!response.ok) return setError(true)
    //
    //     setError(false)
    //     setListings(response.data)
    // }


    return(
        <Screen style={styles.screen}>

            {error && (<>
                <AppText>Coluldn't retrieve the listings</AppText>
                <AppButton title='Retry' onPress={loadListings}/>
            </>)}

            <ActivityIndicatorCustom animating={loading}  />


            <FlatList
                data={listings}
                keyExtractor={listing=>listing.id.toString()}
                showsVerticalScrollIndicator={false}
                renderItem ={({item})=>
                    <Card
                        title={item.title}
                        subTitle={"$"+item.price}
                        imageUrl={item.images[0].url}
                        onPress={()=>navigation.navigate('ListingDetails',item)}
                    />

                }

            />
        </Screen>
    )
}

const styles = StyleSheet.create({

    screen:{
        padding:10,
        backgroundColor: colors.light
    }
});


export default ListingScreen;



