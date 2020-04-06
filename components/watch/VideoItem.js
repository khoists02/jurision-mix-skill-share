import React from 'react';

import { Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Colors from '../../constants/Colors';

import { FlexBox, Size, PaddingSize, MarginSize, Border, FontSize } from '../../styles/Style';
import { TimeAgo } from '../../helpers/Helper';
import ImageCircle from '../common/ImageCircle';
import { getVideoDetail } from '../../store/actions/videos';
import { useDispatch } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';

const VideoItem = props => {
  const { data } = props;

  const dispatch = useDispatch();



  if (data) {
    const { item } = data;
    const redirectToVideo = resourceId => {
      props.navigation.navigate(
        {
          routeName: 'VideoDetail',
          params: {
            videoId: item.resourceId
          }
        }
      )
      dispatch(getVideoDetail(item.resourceId));
    };
    const { channelShortInfo } = item;
    return <TouchableOpacity onPress={item => redirectToVideo(item.resourceId)}>
      <View style={styles.container}>
        <View style={styles.imgContainer}>
          <Image style={styles.img} source={{ uri: item?.imageVM?.originalUrl }} />
        </View>
        <View style={styles.author}>
          <View style={styles.containerImgCircle}>
            <ImageCircle width={20} style={styles.circle} height={20} channelShortInfo={channelShortInfo} />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.authorTitle}>{channelShortInfo?.longName}</Text>
            <Text style={styles.authorTitle}>{channelShortInfo?.tagLine}</Text>
          </View>
        </View>
        <View style={styles.containerDes}>
          <View style={{ flex: 1, justifyContent: 'center' }}>
            <Text style={styles.title}>{item?.title}</Text>
            <Text style={styles.date}>{TimeAgo(item?.createdDateTime?.dateTime)}</Text>
          </View>
          <View style={{ justifyContent: 'center' , flex: 1 , alignItems: 'flex-end' }}>
            <TouchableOpacity onPress={()=> {}}>
              <Ionicons name="ios-star-outline" size={25} color={Colors.activeColor}></Ionicons>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  }
};

const styles = StyleSheet.create({
  container: {
    height: 350,
    width: 350,
    ...MarginSize.BOTTOM_MD,
    ...MarginSize.RIGHT_MD,
    ...Border.ALL,
    borderRadius: 6
  },
  imgContainer: {
    height: 200,
  },
  containerImgCircle: {
    width: 40,
    height: 40,
    ...MarginSize.RIGHT_MD
  },
  author: {
    flexDirection: 'row',
    ...PaddingSize.SM,
    ...FlexBox.flexAlignCenter
  },
  circle: {
    width: 40
  },
  containerDes: {
    ...PaddingSize.SM,
    ...FlexBox.directionRow,
    ...FlexBox.flexSpaceBetween
  },
  title: {
    ...FontSize.fontH3,
    fontWeight: '500',
    ...MarginSize.TOP_SM,
    ...MarginSize.BOTTOM_XS
  },
  img: {
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
  },
  date: {
    color: Colors.activeColor
  },
  authorTitle: {
    ...FontSize.fontH6,
    color: Colors.primary
  }
})

export default VideoItem;