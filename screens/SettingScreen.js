import React  from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Colors from '../constants/Colors';
import { TouchableOpacity } from 'react-native-gesture-handler';

const SettingScreen = props => {
  return (
    <View style={{...props.style, ...styles.container}}>
      <Text style={styles.primaryTitle}>Membership</Text>
      <Text style={styles.secondaryTitle}>Premium membership</Text>
      <Text style={styles.secondaryTitle}>Premium membership</Text>

      <Text style={styles.primaryTitle}>Membership</Text>
      <Text style={styles.secondaryTitle}>Premium membership</Text>
      <Text style={styles.secondaryTitle}>Premium membership</Text>

      <Text style={styles.primaryTitle}>Membership</Text>
      <Text style={styles.secondaryTitle}>Premium membership</Text>
      <Text style={styles.secondaryTitle}>Premium membership</Text>

      <Text style={styles.primaryTitle}>Membership</Text>
      <Text style={styles.secondaryTitle}>Premium membership</Text>
      <Text style={styles.secondaryTitle}>Premium membership</Text>

      <TouchableOpacity>
        <Text style={{...styles.secondaryTitle, ...styles.center}}>Signout</Text>
      </TouchableOpacity>
      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
  },
  primaryTitle: {
    paddingTop: 10,
    paddingBottom: 10,
    color: Colors.txt,
    fontSize: 16,
    paddingLeft: 10,
    backgroundColor: Colors.subTitle,
    color: Colors.colorSubTitle
  },
  secondaryTitle: {
    marginLeft: 10,
    marginRight: 10,
    borderBottomColor: Colors.colorSubTitle,
    borderBottomWidth: 1,
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: 16
  },
  center: {
    textAlign: 'center'
  }
})

export default SettingScreen;