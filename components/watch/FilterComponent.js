import React from 'react';

import { Ionicons } from '@expo/vector-icons';
import { View, Text, StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { FlexBox, Border, PaddingSize } from '../../styles/Style';

const Filter = props => {
  return (
    <View>
      <TouchableOpacity
        onPress={props.onNavigate}
        style={styles.container}>
        <Ionicons style={styles.ico} name="ios-search" size={25} color={Colors.txt} />
        <Text style={styles.textInput}>What does you find the lawyer ?</Text>
      </TouchableOpacity>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    ...FlexBox.flexBox,
    flexDirection: 'row',
    ...FlexBox.flexAlignCenter,
    ...Border.borderAll,
    ...PaddingSize.SM,
    borderRadius: 5,
    fontSize: 25,
    backgroundColor: Colors.white
  },
  textInput: {
    width: '100%',
    fontSize: 16,
    fontWeight: '500',
  },
  ico: {
    marginRight: 10
  }
});

export default Filter;