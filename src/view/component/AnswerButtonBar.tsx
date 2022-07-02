import React, {FC} from 'react';
import {
    FlatList,
    StyleSheet,
    View
} from 'react-native';

import AnswerButton from "./AnswerButton";

export interface Item {
    "label": string;
    "name": string;
}

interface IProps {
    answerArray: Item[]
}

const AnswerButtonBar: FC<IProps> = ({answerArray}) => {

    return (
        <View style={styles.container}>
            <FlatList
                horizontal
                data={answerArray}
                renderItem={({item}) => (<AnswerButton item={item}/>)}
                // keyExtractor={keyExtractor}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 8,
        marginVertical: 2,
        left: 0,
        right: 0,
        position: 'absolute',
        bottom: 48,
        alignItems: 'center'
    },
});

export default AnswerButtonBar;
