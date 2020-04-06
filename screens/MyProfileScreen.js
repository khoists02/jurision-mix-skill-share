import React  from 'react';
import { View, StyleSheet } from 'react-native';
import NoResponseActivity from '../components/NoResponseActivity';

const MyProfileScreen = props => {
  return (
    <View style={styles.container}>
      {/* <NoResponseActivity /> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    padding: 30,
    justifyContent: 'center',
    alignContent: 'center',
    flex: 1
  }
})

export default MyProfileScreen;