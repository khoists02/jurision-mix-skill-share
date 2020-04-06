import React from 'react';

import { Text, View, Image, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';

const ProfileHeader = props => {
  return (
    <View style={styles.container}>
      <Image style={styles.bgImageFill} source={require('../assets/images/header-profile.jpg')} />
      <Text style={{...styles.txt, ...styles.marginTop5}}>{props.title}</Text>
      <View style={styles.description}>
        <Text style={{...styles.txt, ...styles.marginTop5}}>0 Follower</Text>
        <Text style={{...styles.txt, ...styles.marginTop5}}>0 Following</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.profileHeader
  },
  bgImageFill: {
    borderRadius: 100,
    width: 60,
    height: 60
  },
  description: {
    width: '35%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  marginTop5: {
    marginTop: 5
  },
  txt: {
    color: Colors.white,
    fontWeight: 'bold',
    fontSize: 12
  }
})

export default ProfileHeader;