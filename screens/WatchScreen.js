import React from 'react';
import { View, StyleSheet } from 'react-native';
import Filter from '../components/watch/FilterComponent';
import { useSelector } from 'react-redux';
import VideoList from '../components/watch/VideoList';
import { ScrollView } from 'react-native-gesture-handler';

const WatchScreen = props => {
  const availabelVideos = useSelector(state=> state.video.videos);
  const availabelFavouriteVideos = useSelector(state=> state.video.favouriteVideos);
  return (
    <ScrollView style={styles.container}>
      {/* FilterComponent */}
      <Filter style={styles.filter} onNavigate={()=> props.navigation.navigate('Filter')} />

      {/* Continue Watching Component */}
      <View style={{ height: 400 }}>
        <VideoList navigation={props.navigation} data={availabelVideos}></VideoList>
      </View>
      

      {/* CategoriesComponent */}
      <View style={{ height: 400 }}>
        <VideoList favouritePage={true} navigation={props.navigation} data={availabelFavouriteVideos}></VideoList>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    padding: 30,
    flex: 1,
    backgroundColor: '#f5f6fa'
  },
  filter: {
  }
})

export default WatchScreen;
