import React from 'react';
import { StyleSheet } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useTheme } from '@shopify/restyle';
import {Text} from '../components/theme';

const Button = ({label, variant, onPress, children}) => {
  const theme = useTheme();
  const backgroundColor = variant === 'primary' ? theme.colors.primary  : (variant === 'transparent' ? "transparent" : theme.colors.grey);
  const color = variant === 'primary' ? theme.colors.white  : theme.colors.secondary;
  return (
    <RectButton style={[styles.container, {backgroundColor}]} {...{onPress}}>
      {label && (<Text variant="button" style={{color}}>{label}</Text>)}
      {children}
    </RectButton>
  );
}

const styles = StyleSheet.create({
  container: {borderRadius: 25, height: 50, width: 245, justifyContent: 'center', alignItems: 'center'},
});

export default Button;