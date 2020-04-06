import React from 'react';
import { Image, StyleSheet, View, Text } from 'react-native';
import { FlexBox, FontSize } from '../../styles/Style';
import Colors from '../../constants/Colors';

const ImageCircle = props => {
  const buildImageNoUrl = firstCharacterName => {
    return <View style={styles.noImage}>
      <Text style={{ color: Colors.white, ...FontSize.fontH3, fontWeight: '500' }}>{firstCharacterName.toUpperCase()}</Text>
    </View>
  }
  let xhtml = null;
  let imageObject;
    if (props.channelShortInfo && props.channelShortInfo.logo) {
      imageObject = {uri: props.channelShortInfo.logo.originalUrl };
      xhtml = <Image style={styles.img} source={imageObject} />;
    } else if (props.channelShortInfo && !props.channelShortInfo.logo) {
      let firstCharacterName = '';
      const arrayFullName = props.channelShortInfo.longName.split(" ");
      arrayFullName.forEach((item) => {
        firstCharacterName += item.charAt(0).toUpperCase();
      });
      xhtml = buildImageNoUrl(firstCharacterName);
    }
    return  xhtml;
};

const styles = StyleSheet.create({
  img: {
    resizeMode: 'cover',
    borderRadius: 200,
    width: '100%',
    height: '100%'
  },
  noImage: {
    display: 'flex',
    ...FlexBox.flexCenter,
    borderRadius: 200,
    width: '100%',
    height: '100%',
    backgroundColor: Colors.primary
  }
})

export default ImageCircle;
