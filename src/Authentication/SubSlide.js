import React from 'react';
import { View, StyleSheet } from 'react-native';
import Button from '../components/Button';
import {Text} from '../components/theme';

const SubSlide = ({contentTitle, contentDesc, last, onPress}) => (
  <View style={styles.container}>
    <Text variant="title2" style={styles.contentTitle}>{contentTitle}</Text>
    <Text variant="body" style={styles.contentDesc}>{contentDesc}</Text>
    <Button label={last ? 'Let\'s get started' : 'Next'} variant={last ? 'primary' : 'default'} {...{onPress}} />
  </View>
);

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center', padding: 44},
  contentTitle: {marginBottom: 12, textAlign: 'center'},
  contentDesc: {marginBottom: 40, textAlign: 'center'},
})

export default SubSlide;