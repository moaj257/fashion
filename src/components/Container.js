import React from 'react';
import theme, { Box } from './theme';
import { Image, StyleSheet, Dimensions, StatusBar } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const picture = {
  src: require('../../assets/patterns/bg-pattern-02.jpg'),
  width: 375,
  height: 190
};

export const assets = [picture];
const {width} = Dimensions.get('window');
const aspectRatio = picture.height / picture.width;
const height = width * aspectRatio;

const Container = ({children, footer}) => {
  const insets = useSafeAreaInsets();
  
  return (
    <Box flex={1} backgroundColor="secondary">
      <StatusBar barStyle={'light-content'} />
      <Box backgroundColor="white">
        <Box borderBottomLeftRadius="xl" overflow="hidden" height={height * 0.61}>
          <Image source={picture.src} style={{width, height, borderBottomLeftRadius: theme.borderRadii.xl}} />
        </Box>
      </Box>
      <Box flex={1} overflow="hidden">
        <Image source={picture.src} style={[styles.underlayImg, {width, height}]} />
        <Box borderRadius="xl" borderTopLeftRadius={0} flex={1} backgroundColor="white">
          {children}
        </Box>
        <Box backgroundColor="secondary" paddingVertical="m">
          {footer}
        </Box>
      </Box>
    </Box>
  );
}

const styles = StyleSheet.create({
  underlayImg: {...StyleSheet.absoluteFillObject, top: -height * 0.61}
});

export default Container;