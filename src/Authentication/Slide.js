import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import {Text} from '../components/theme';

const {width, height} = Dimensions.get('window');

export const SLIDE_HEIGHT = 0.61 * height;

const Slide = ({label, right}) => (
  <View style={styles.container}>
    <View style={[styles.labelContainer, right ? styles.labelRightContainer : styles.labelLeftContainer]}>
      <Text variant={'hero'}>{label}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {width},
  labelContainer: {height: 100, justifyContent: 'center'},
  labelLeftContainer: {transform: [{translateY: (SLIDE_HEIGHT - 100)/2}, {translateX: -width/2 + 50}, {rotate: '90deg'}]},
  labelRightContainer: {transform: [{translateY: (SLIDE_HEIGHT - 100)/2}, {translateX: width/2 - 50}, {rotate: '-90deg'}]},
})

export default Slide;