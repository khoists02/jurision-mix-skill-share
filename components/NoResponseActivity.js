import React from 'react';

import { Ionicons } from '@expo/vector-icons';
import { View, Text, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';

const NoResponseActivity = props => {
  return (
    <View style={{...styles.noResponse, ...props.style}}>
        <Ionicons name="ios-megaphone" size={50} color={Colors.txt} />
        <Text style={{...styles.text, ...styles.bold, ...styles.fonth2}}>
          You don' have any activity to show
        </Text>
        <Text style={{...styles.text}}>class you tech or complete , and</Text>
        <Text style={{...styles.text}}>projects you create will show up here.</Text>
      </View>
  )
};

const styles = StyleSheet.create({
  noResponse: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: Colors.txt,
    marginTop: 5
  },
  bold: {
    fontWeight: '500',
  },
  fonth2: {
    fontSize: 20
  }
});

export default NoResponseActivity;
