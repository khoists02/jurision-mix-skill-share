import React  from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MyClassesScreen = props => {
  return (
    <View style={styles.container}>
      <Text>MyClasses Screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center'
  }
})

export default MyClassesScreen;