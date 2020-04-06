import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import NoResponseActivity from '../components/NoResponseActivity';

const ActivityScreen = props => {
  return (
    <View style={{...props.style, ...styles.container}}>
      <NoResponseActivity style={{ flex: 1 }}></NoResponseActivity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    flex: 1
  }
});


export default ActivityScreen;