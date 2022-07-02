import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Vibration,
} from 'react-native';
import {Colors} from "../../utility/Colors";
import {width_} from "../../utility/Constant";

interface Props {
  label:string;
  messageSender:string;
}

export const BubbleMessage: React.FC<Props> = ({
                                                 label,
  messageSender,

}) => {
  const color =
    messageSender !== ""
      ? Colors.BUBBLE_SELF
      : 'gray'
  const colorBorder =
      messageSender !== ""
          ? Colors.BUBBLE_SELF_BORDER
          : 'gray'
  return (
    <View style={styles.container}>
      <View
        style={[
          styles.item,
          messageSender ? styles.itemOut : styles.itemIn,
          {alignItems: 'center'},
        ]}>

          <View
            style={[
              styles.balloon,
              {backgroundColor: !messageSender ? Colors.WHITE_COLOR : color,
                borderWidth:!messageSender ? 0 : 1,
                borderBottomRightRadius:messageSender ? 0 : 10,
                borderBottomLeftRadius:messageSender ? 10 : 0,
                borderColor:!messageSender ? Colors.WHITE_COLOR : colorBorder},
            ]}>
            <Text
              style={[
                styles.textStyle,
                {color: messageSender ? Colors.WHITE_COLOR : Colors.TITLE_COLOR},
              ]}>
              {label}
            </Text>

          </View>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 12,
    marginVertical: 2,
    width: 'auto',
  },
  item: {
    flexDirection: 'row',
  },
  textStyle: {
    fontSize: 14,
  },
  imageStyle: {
    width: 30,
    height: 30,
  },
  itemIn: {
    marginLeft: 9,
  },
  itemOut: {
    alignSelf: 'flex-end',
    marginRight: 9,
  },
  name: {
    color: Colors.TEXT_COLOR,
    fontSize: 13,
    marginVertical: 5,
  },
  messageView: {
    marginLeft: 35,
  },
  balloon: {
    maxWidth: width_,
    paddingHorizontal: 8,
    paddingTop: 8,
    paddingBottom: 8,
    borderRadius: 10,
  },

});

export default BubbleMessage;
