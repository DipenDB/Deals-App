import React,{useState,useEffect} from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";
import Screen from '../../Components/Screen/Screen';
import FormikForm from '../../Components/FormikForm/FormikForm';
import AppFormInputField from '../../Components/Form/AppFormInputField/AppFormInputField';
import AppFormPicker from '../../Components/Form/Picker/AppFormPicker';
import SubmitButton from '../../Components/Form/SubmitButton';
import CategoryPickerItem from '../../Components/Form/Picker/CategoryPickerItem';
import FormImagePicker from '../../Components/Image/FormImagePicker';
import listingsApi from '../../api/listingsApi';

import {useLocation} from '../../Components/hooks/useLocation';
import UploadScreen from './UploadScreen';

const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label("Title"),
    price: Yup.number().required().min(1).max(10000).label("Price"),
    description: Yup.string().label("Description"),
    category: Yup.object().required().nullable().label("Category"),
    images: Yup.array().min(1, "Please select at least one image."),
});

const categories = [
    {
        backgroundColor: "#fc5c65",
        icon: "floor-lamp",
        label: "Furniture",
        value: 1,
    },
    {
        backgroundColor: "#fd9644",
        icon: "car",
        label: "Cars",
        value: 2,
    },
    {
        backgroundColor: "#fed330",
        icon: "camera",
        label: "Cameras",
        value: 3,
    },
    {
        backgroundColor: "#26de81",
        icon: "cards",
        label: "Games",
        value: 4,
    },
    {
        backgroundColor: "#2bcbba",
        icon: "shoe-heel",
        label: "Clothing",
        value: 5,
    },
    {
        backgroundColor: "#45aaf2",
        icon: "basketball",
        label: "Sports",
        value: 6,
    },
    {
        backgroundColor: "#4b7bec",
        icon: "headphones",
        label: "Movies & Music",
        value: 7,
    },
    {
        backgroundColor: "#a55eea",
        icon: "book-open-variant",
        label: "Books",
        value: 8,
    },
    {
        backgroundColor: "#778ca3",
        icon: "application",
        label: "Other",
        value: 9,
    },
];

function PostScreen() {

    const location = useLocation();
    // console.log(location)
    const [upLoadVisible,setUploadVisible]=useState(false)
    const [progress,setProgress]=useState(0)



    const handleSubmit=async (listing,{resetForm})=>{
        setProgress(0);
        setUploadVisible(true)
        const result = await listingsApi.addListing(
            {...listing,location},
            progress=>setProgress(progress)
        )


        if (!result.ok) {
            setUploadVisible(false);
            return alert('Could not save the listing.');
        }
        // alert('Success')

        //To reset form after submit it is default method of Formik Bag on onSubmit method
        resetForm();

    }






    return (
        <Screen style={styles.container}>
            {/*animation after upload*/}
            <UploadScreen
                // on Done to hide upload bar and to show Done animation
                onDone={()=>setUploadVisible(false)}
                progress={progress}
                visible={upLoadVisible}/>

            <FormikForm
                initialValues={{
                    title: "",
                    price: "",
                    description: "",
                    category: null,
                    images: [],
                }}
                // onSubmit={(values) => console.log(location)}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
            >
                <FormImagePicker name='images'/>

                <AppFormInputField
                    maxLength={255}
                    name="title"
                    placeholder="Title"
                />

                <AppFormInputField
                    keyboardType="numeric"
                    maxLength={8}
                    name="price"
                    placeholder="Price"
                    width={120}
                />

                <AppFormPicker
                    items={categories}
                    name="category"
                    numberOfColumns={3}
                    PickerItemComponent={CategoryPickerItem}
                    placeholder="Category"
                    width="60%"
                />

                <AppFormInputField
                    maxLength={255}
                    multiline
                    name="description"
                    numberOfLines={3}
                    placeholder="Description"
                />
                <SubmitButton title="Post" />
            </FormikForm>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
});
export default PostScreen;