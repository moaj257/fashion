import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from '../components/Button';

const SubSlide = ({contentTitle, contentDesc, last, onPress}) => (
  <View style={styles.container}>
    <Text style={styles.contentTitle}>{contentTitle}</Text>
    <Text style={styles.contentDesc}>{contentDesc}</Text>
    <Button label={last ? 'Let\'s get started' : 'Next'} variant={last ? 'primary' : 'default'} {...{onPress}} />
  </View>
);

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center', padding: 44},
  contentTitle: {fontFamily: 'SFProText-Semibold', fontSize: 22, lineHeight: 30, marginBottom: 12, color: '#0C0D34', textAlign: 'center'},
  contentDesc: {fontFamily: 'SFProText-Regular', fontSize: 15, lineHeight: 22, marginBottom: 40, color: '#0C0D34', textAlign: 'center'},
})

export default SubSlide;