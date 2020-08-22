import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

const Button = ({label, variant, onPress}) => (
  <RectButton style={[styles.container, variant === 'primary' ? styles.primaryContainer : styles.defaultContainer]} {...{onPress}}>
    <Text style={[styles.label, variant === 'primary' ? styles.primaryLabel : styles.defaultLabel]}>{label}</Text>
  </RectButton>
);

const styles = StyleSheet.create({
  container: {borderRadius: 25, height: 50, width: 245, justifyContent: 'center', alignItems: 'center'},
  label: {fontSize: 15, fontFamily: 'SFProText-Regular'},
  primaryLabel: {color: 'white'},
  defaultLabel: {color: '#0C0D34'},
  primaryContainer: {backgroundColor: '#2CB9B0'},
  defaultContainer: {backgroundColor: 'rgba(12, 13, 52, 0.05)'}
});

export default Button;