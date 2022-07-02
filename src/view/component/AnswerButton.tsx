import React, {FC} from 'react';
import {StyleSheet, Text, TouchableOpacity, View,} from 'react-native';

import {Colors} from "../../utility/Colors";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store/rootReducer";

import {addMessage, requestUserAnswer} from "../../store/chat/chatAction";
import {Item} from "./AnsweButtonsBar";

interface IProps {
    item: Item;

}

const AnswerButton: FC<IProps> = ({item}) => {
    const dispatch = useDispatch();
    const authState = useSelector((state: RootState) => state.authReducer);
    const sendRequest = (label: string, messageSender: string, responseId: string, token: string) => {

        dispatch(addMessage({
            answerButton: [],
            label: label, messageSender: "me"
        }))
        dispatch(requestUserAnswer({responseId, token}))

    }

    return (
        <TouchableOpacity
            onPress={() => sendRequest(item.label, "me", item.name, authState?.sessionId)}
            style={styles.container}>
            <Text style={styles.txt}>
                {item.label}
            </Text>
        </TouchableOpacity>

    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.BUBBLE_SELF,
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 8,
        marginHorizontal: 12
    },
    txt:{
        color: Colors.WHITE_COLOR,
        fontSize:14
    }
});

export default AnswerButton;
