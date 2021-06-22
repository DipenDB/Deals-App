import React, { useState } from "react";
import { FlatList, StyleSheet, RefreshControl,Platform,StatusBar } from "react-native";
import Screen from '../../Components/Screen/Screen';
import ListItem from '../../Components/ListItem/ListItem';
import ListItemSeparator from '../../Components/ListItem/ListItemSeparator';
import ListItemDeleteAction from '../../Components/ListItem/ListItemDeleteAction';




const initialMessages = [
    {
        id: 1,
        title: "T1",
        description: "D1",
        image: require("../../Assets/Images/mosh.jpg"),
    },
    {
        id: 2,
        title: "T2",
        description: "D2",
        image: require("../../Assets/Images/mosh.jpg"),
    },
];

function  MessagesScreen(props) {
    const [messages, setMessages] = useState(initialMessages);
    const [refreshing, setRefreshing] = useState(false);


    const handleDelete = (message) => {
        // Delete the message from messages
        setMessages(messages.filter((m) => m.id !== message.id));
    };

    return (
        <Screen>
            <FlatList
                data={messages}
                keyExtractor={(message) => message.id.toString()}
                renderItem={({ item }) => (
                    <ListItem
                        title={item.title}
                        subTitle={item.description}
                        image={item.image}
                        onPress={() => console.log("Message selected", item)}
                        renderRightActions={()=>(<ListItemDeleteAction onPress={()=>handleDelete(item)}/>)}
                    />
                )}

                itemSeparatorComponent={ListItemSeparator}





                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={()=>{
                            setMessages(
                                {
                                    id: 3,
                                    title: "T2",
                                    description: "D2",
                                    image: require("../../Assets/Images/mosh.jpg"),
                                },
                            )
                            console.log(messages)
                        }} />
                }




            />
        </Screen>
    );
}

const styles = StyleSheet.create({
    screen:{
        paddingTop:Platform.OS==='android' ? StatusBar.currentHeight : 0
    }

});

export default MessagesScreen;
