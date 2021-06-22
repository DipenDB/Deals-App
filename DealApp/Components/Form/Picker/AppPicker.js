import React,{useState} from "react";
import { View, TouchableWithoutFeedback,TouchableOpacity,Modal, StyleSheet,Platform,Button,FlatList } from "react-native";
import MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons'

import colors from '../../../Assets/Colors'
import AppText from '../../Text/AppText';
import Screen from '../../Screen/Screen';
import PickerItem from './PickerItem';

function AppPicker({
                       icon,
                       items,
                       numberOfColumns = 1,
                       onSelectItem,
                       // PickerItemComponent = PickerItem,
                       placeholder,
                       PickerItemComponent=PickerItem,
                       selectedItem,
                       width = "100%",
                   }) {

    const [modalVisible,setModalVisible]=useState(false)



    return (
        <>
        <TouchableOpacity onPress={()=>setModalVisible(true)}>
            <View style={[styles.container, { width }]}>
                {icon && (
                    <MaterialCommunityIcons
                        name={icon}
                        size={30}
                        color={colors.medium}
                        style={styles.icon}
                    />
                )}

                {selectedItem ? (
                    <AppText style={styles.text}>{selectedItem.label}</AppText>
                ) : (
                    <AppText style={styles.placeholder}>{placeholder}</AppText>
                )}

                <MaterialCommunityIcons
                    name="chevron-down"
                    size={20}
                    color={colors.medium}
                />

            </View>
        </TouchableOpacity>



        <Modal visible={modalVisible} animationType='slide'>
            <Screen>
                <Button title="Close" onPress={()=>setModalVisible(false)}/>

                <FlatList
                    data={items}
                    keyExtractor={(item)=>item.value.toString()}
                    numColumns={numberOfColumns}
                    renderItem={({item})=>
                        <PickerItemComponent
                            item={item}
                            label={item.label}
                            // Display clicked item from list
                            // onPress={()=>console.log(item)}

                            onPress={()=>{
                                //Close modal after selection
                                setModalVisible(false)
                                //It give item {label:'Furniture', value:1} to caller ie. AppFormPicker
                                onSelectItem(item)

                            }}

                        />}
                />

            </Screen>
        </Modal>

        </>



    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.light,
        borderRadius:25,
        flexDirection:'row',
        padding:17,
        marginVertical:10,
        alignItems:'center'
    },
    icon: {
        marginRight: 10,
    },
    placeholder: {
        color:colors.medium,
        flex: 1,
    },
    text:{
        fontSize:18,
        fontFamily:Platform.OS==='android' ? 'Roboto' : 'Avenir',
        color:colors.dark,
        // flexWrap: 'wrap'
        flexShrink: 1,
        flex: 1,
    },

});

export default AppPicker;
