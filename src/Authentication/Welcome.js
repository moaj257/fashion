import React from 'react';
import theme, { Box, Text } from '../components/theme';
import { StyleSheet, Dimensions, Image } from 'react-native';
import Button from '../components/Button';

const {width} = Dimensions.get('window');

const picture = {
  src: require('../../assets/welcome/1.png'),
  width: 408,
  height: 612
};

export const assets = [picture.src];

const onPress = navigation => navigation.navigate('Login');

const Welcome = ({navigation}) => (
  <Box flex={1} backgroundColor="white">
    <Box flex={1} borderBottomRightRadius="xl" backgroundColor="grey" alignItems="center" justifyContent="flex-end">
      <Image source={picture.src} style={[styles.picture, {width: width, height: (width - picture.height) / picture.width}]} />
    </Box>
    <Box flex={1} borderTopLeftRadius="xl">
      <Box backgroundColor="grey" position="absolute" top={0} left={0} right={0} bottom={0} />
      <Box backgroundColor="white" borderTopLeftRadius="xl" flex={1} justifyContent="space-evenly" alignItems="center" padding="xl">
        <Text variant="title2">Let's get started</Text>
        <Text variant="body" textAlign="center">Login to your account below or sign up for an amazing experience</Text>
        <Button variant="primary" label="Have an account? Login" onPress={() => onPress(navigation)} />
        <Button label="Join Us, It's Free" />
        <Button variant="transparent" label="Forgot password?" />
      </Box>
    </Box>
  </Box>
);

const styles = StyleSheet.create({
  picture: {...StyleSheet.absoluteFillObject, borderBottomRightRadius: theme.borderRadii.xl}
})

export default Welcome;