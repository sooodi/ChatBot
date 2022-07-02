import React, {FC, useEffect} from 'react';
import {
    StyleSheet,
    Text,
    FlatList,
    View, StatusBar,
} from 'react-native';
import {useDispatch, useSelector} from "react-redux";
import {authToServer} from "../store/auth/authAction";
import  BubbleMessage from "./component/BubbleMessage";
import {RootState} from "../store/rootReducer";
import AnswerButtonBar from "./component/AnswerButtonBar";

import {Colors} from "../utility/Colors";

interface Header {
    title: string;
}

const Chat: FC<Header> = props => {
    const dispatch = useDispatch();
    const chatState = useSelector((state:RootState) => state.chatReducer);

    const loginToserver = () => {
        dispatch(authToServer())
    }

    useEffect(() => {
        loginToserver()
    }, [])

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={Colors.BACK_COLOR} barStyle="dark-content"/>
            <Text style={styles.textile}>Hello EveryOne
            </Text>
            <FlatList
                data={chatState?.messages}
                renderItem={({item})=>(<BubbleMessage label={item.label} messageSender={item.messageSender} />)}
                // keyExtractor={keyExtractor}
            />
            {chatState?.buttons && <AnswerButtonBar
                answerArray={chatState?.buttons} />}
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        backgroundColor:Colors.BACK_COLOR,
        flex:1
    },
    textile: {
        textAlign: 'center',
        fontSize: 15,
        fontWeight:'bold',
        color:Colors.BORDER_COLOR,
        padding:8,
        borderWidth:0.5,
        borderRadius:30,
        width:200,
        borderColor:Colors.DATE_COLOR,
        alignSelf:'center'
    },
});

export default Chat;
