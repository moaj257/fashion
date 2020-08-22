import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';

const {width, height} = Dimensions.get('window');

export const SLIDE_HEIGHT = 0.61 * height;
export const BORDER_RADIUS = 75;

const Slide = ({label, picture, right}) => (
  <View style={styles.container}>
    <View style={styles.underlay}>
      <Image source={picture} style={styles.underlayPicture} />
    </View>
    <View style={[styles.labelContainer, right ? styles.labelRightContainer : styles.labelLeftContainer]}>
      <Text style={styles.label}>{label}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {width},
  label: {fontSize: 70, lineHeight: 70, fontFamily: 'SFProText-Bold', color: 'white', textAlign: 'center'},
  labelContainer: {height: 100, justifyContent: 'center'},
  labelLeftContainer: {transform: [{translateY: (SLIDE_HEIGHT - 100)/2}, {translateX: -width/2 + 50}, {rotate: '90deg'}]},
  labelRightContainer: {transform: [{translateY: (SLIDE_HEIGHT - 100)/2}, {translateX: width/2 - 50}, {rotate: '-90deg'}]},
  underlay: {...StyleSheet.absoluteFillObject, justifyContent: 'flex-end'},
  underlayPicture: {...StyleSheet.absoluteFillObject, width: undefined, height: undefined, borderBottomRightRadius: BORDER_RADIUS}
})

export default Slide;