import React from 'react';
import {View,Text,StyleSheet,Image} from 'react-native';
import colors from '../../Assets/Colors'
import AppText from '../../Components/Text/AppText';
import ListItem from '../../Components/ListItem/ListItem';


const ListingDetailScreen=({route})=>{
    const listing =route.params;
    console.log(route)
    return(
        <View style={styles.container}>
            {/*<Image style={styles.image} source={listing.image}/>*/}
            <Image style={styles.image} source={{uri: listing.images[0].url}}/>

            <View style={styles.detailContainer}>
                <AppText style={styles.title}>{listing.title}</AppText>
                <AppText style={styles.price}>${listing.price}</AppText>

                <ListItem
                    image={require('../../Assets/Images/mosh.jpg')}
                    title='Mosh'
                    subTitle='5 Listing'
                />
            </View>

        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    detailContainer:{
        padding:20,
    },
    image:{
        width:'100%',
        height:300
    },
    price:{
        color: colors.secondary,
        fontWeight: 'bold',
        fontSize: 20,
        marginVertical:10
    },
    title:{
        fontSize:24,
        fontWeight:'500'
    }
});


export default ListingDetailScreen;



