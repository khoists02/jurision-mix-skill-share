import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { FlexBox, PaddingSize, MarginSize, Border, FontSize } from '../../styles/Style';
import { TimeAgo } from '../../helpers/Helper';
import ImageCircle from '../common/ImageCircle';
import Colors from '../../constants/Colors';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

const VideoDetail = props => {
  const { data } = props;
  if (data) {
    const { channelShortInfo } = data;
    return (
      <View style={styles.container}>
        <View style={styles.imgContainer}>
          <Image style={styles.img} source={{ uri: data?.imageVM?.originalUrl }} />
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
          <Text style={styles.title}>{data?.title}</Text>
        </View>

        <ScrollView style={styles.lorem}>
          <Text style={{ ...MarginSize.TOP_SM, ...PaddingSize.sitePadding }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

            Why do we use it?
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).


            Where does it come from?
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

            The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
          </Text>
          <Text style={styles.date}>{TimeAgo(data?.createdDateTime?.dateTime)}</Text>
          <TouchableOpacity>
            <Text style={styles.subscriber}>SUBSCRIBER</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...MarginSize.BOTTOM_MD,
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
    ...PaddingSize.SM
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
    color: Colors.activeColor,
    ...MarginSize.LEFT_MD
  },
  authorTitle: {
    ...FontSize.fontH6,
    color: Colors.primary
  },
  subscriber: {
    
    borderWidth: 1,
    borderRadius: 6,
    borderColor: Colors.activeColor,
    width: 200,
    textAlign: 'center',
    ...PaddingSize.TOP_MD,
    ...PaddingSize.BOTTOM_MD,
    ...MarginSize.BOTTOM_XL,
    ...MarginSize.LEFT_MD,
    ...MarginSize.TOP_SM,
    color: Colors.primary
  }
})

export default VideoDetail;