import React from 'react';
import { useSelector } from 'react-redux';
import { View, StyleSheet, Text, Button } from 'react-native';
import VideoDetail from '../components/watch/VideoDetail';
import Colors from '../constants/Colors';
import { MarginSize, FlexBox, FontSize, PaddingSize } from '../styles/Style';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';

const VideoDetailScreen = props => {
  const selectedVideo = useSelector(state=> state.video.videoDetail);
  return (
    <ScrollView style={styles.container}>

      {/* BUILD HEADER */}
      <View style={styles.header}>
        <Text style={styles.title}>{selectedVideo?.title}</Text>
        <View style={styles.seen}>
          <Text style={{ color: Colors.activeColor, ...FontSize.fontH6 }}>{selectedVideo.totalComments || 0} Comment </Text>
          <Text style={{ color: Colors.activeColor, ...FontSize.fontH6 }}>{selectedVideo.totalLikes || 0} Like </Text>
          <Text style={{ color: Colors.activeColor, ...FontSize.fontH6 }}>{selectedVideo.totalViews || 0} Views </Text>
        </View>
        <TouchableOpacity onPress={()=> props.navigation.goBack(null)}>
          <Ionicons name="ios-home" size={25} color="#FFF" />
        </TouchableOpacity>
      </View>

      {/* CONTENT */}
      <VideoDetail data={selectedVideo} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
  },
  header: {
    backgroundColor: Colors.primary,
    ...FlexBox.flexBox,
    ...MarginSize.BOTTOM_MD,
    ...FlexBox.flexCenter,
    ...PaddingSize.MD
  },
  seen: {
    width: '35%',
    ...FlexBox.directionRow,
    ...FlexBox.flexCenter,
    ...MarginSize.TOP_MD,
    ...MarginSize.BOTTOM_MD,
    ...FlexBox.flexSpaceBetween
  },  
  title: {
    color: Colors.activeColor,
    fontWeight: '500',
    ...FontSize.fontH2,
    ...MarginSize.TOP_MD
  }
})

export default VideoDetailScreen;