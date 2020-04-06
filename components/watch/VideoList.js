import React from 'react';

import { Text, View, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import Colors from '../../constants/Colors';

import { FlexBox, Size, PaddingSize, MarginSize, Border, BOX_SHADOW_STYPE } from '../../styles/Style';
import VideoItem from './VideoItem';

const VideoList = props => {

  return <View style={styles.container}>
    <FlatList
      horizontal={true}
      data={props.data}
      keyExtractor={(item, index) => item.resourceId.toString()}
      renderItem={(item) => <VideoItem favouritePage={props.favouritePage} navigation={props.navigation} data={item} />}>
    </FlatList>
  </View>
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...MarginSize.TOP_MD,
    ...BOX_SHADOW_STYPE,
  }
})

export default VideoList;