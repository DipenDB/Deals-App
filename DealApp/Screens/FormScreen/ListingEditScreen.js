import React,{useState} from 'react';
import {View,Text,StyleSheet,StatusBar} from 'react-native';
import AppTextInput from '../../Components/Form/AppTextInput';
import Screen from '../../Components/Screen/Screen';
import AppPicker from '../../Components/Form/Picker/AppPicker';
import * as Yup from 'yup'
import AppFormPicker from '../../Components/Form/Picker/AppFormPicker';


const categories=[
    {label:'Furniture', value:1},
    {label:'Clothing', value:2},
    {label:'Cameras', value:3},
]

const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label("Title"),
    price: Yup.number().required().min(1).max(10000).label("Price"),
    description: Yup.string().label("Description"),
    category: Yup.object().required().nullable().label("Category"),
    images: Yup.array().min(1, "Please select at least one image."),
});


const ListingEditScreen=()=>{

    const [category,setCategory]=useState();


    return(
        <Screen>
            <AppTextInput
                maxLength={255}
                name='title'
                placeholder='Title'
            />

            <AppTextInput
                keyboardType='numeric'
                maxLength={8}
                name='price'
                placeholder='Price'
            />

            <AppFormPicker
                items={categories}
                name='categories'
                placeholder='Category'
            />






            <AppPicker
                selectedItem={category}
                onSelectItem={item=>setCategory(item)}
                items={categories}
                icon='apps'
                placeholder='Category'/>
        </Screen>

    )
}

const styles = StyleSheet.create({

});


export default ListingEditScreen;



