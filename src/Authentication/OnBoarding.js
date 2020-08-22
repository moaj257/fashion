import React, { useRef } from 'react';
import { View, StyleSheet, Dimensions, Image } from 'react-native';
import Slide, {SLIDE_HEIGHT} from './Slide';
import { interpolateColor, useScrollHandler } from 'react-native-redash';
import Animated, { multiply, divide, interpolate, Extrapolate } from 'react-native-reanimated';
import SubSlide from './SubSlide';
import Dot from './Dot';
import theme from '../components/theme';

const {width} = Dimensions.get('window');

const slides = [
  {
    label: 'Relaxed',
    contentTitle: 'Find Your Outfits',
    contentDesc: 'Confused about your outfit? Don\'t worry! Find the best outfit here.',
    color: '#BFEAF5',
    picture: {
      src: require('../../assets/onboarding/1.png'),
      width: 408,
      height: 612
    }
  }, {
    label: 'Playful',
    contentTitle: 'Hear it First, Wear it First',
    contentDesc: 'Hating the clothes in your wardrobe? Explore hundreds of outfit ideas.',
    color: '#BEECC4',
    picture: {
      src: require('../../assets/onboarding/2.png'),
      width: 408,
      height: 612
    }
  }, {
    label: 'Excentric',
    contentTitle: 'Your Style, Your Way',
    contentDesc: 'Create your individual & unique style and look amazing everyday.',
    color: '#FFE4D9',
    picture: {
      src: require('../../assets/onboarding/3.png'),
      width: 408,
      height: 612
    }
  }, {
    label: 'Funky',
    contentTitle: 'Look Good, Feel Good',
    contentDesc: 'Discover the latest trends in fashion and explore your personality.',
    color: '#FFDDDD',
    picture: {
      src: require('../../assets/onboarding/4.png'),
      width: 408,
      height: 612
    }
  }, 
];

export const assets = slides.map(slide => slide.picture.src);

const OnBoarding = ({navigation}) => {
  const scroll = useRef(null);
  const {scrollHandler, x} = useScrollHandler();
  const backgroundColor = interpolateColor(x, {
    inputRange:  slides.map((_, i) => i * width),
    outputRange: slides.map(slide => slide.color),
  });

  const onPress = (index, last, navigation) => {
    if(last)
      navigation.navigate('Welcome');
    else
      scroll.current?.getNode().scrollTo({x: width * (index + 1), animated: true});
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.slider, {backgroundColor}]}>
        {slides.map(({picture}, index) => {
          const opacity = interpolate(x, {
            inputRange: [(index - 0.5) * width, index * width, (index + 0.5) * width],
            outputRange: [0, 1, 0],
            extrapolate: Extrapolate.CLAMP
          })
          return (
            <Animated.View key={`slide-image-${index}`} style={[styles.underlay, {opacity}]}>
              <Image source={picture.src} style={[styles.underlayPicture, {width: width, height: (width - picture.height) / picture.width}]} />
            </Animated.View> 
          );
        })}
        <Animated.ScrollView
          ref={scroll}
          horizontal
          snapToInterval={width}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          bounces={false}
          {...scrollHandler}
        >
          {slides.map(({label, picture}, index) => (
            <Slide key={`slide-item-${label}-${index}`} {...{label, picture, right: index % 2}} />
          ))}
        </Animated.ScrollView>
      </Animated.View>
      <View style={styles.footer}>
        <Animated.View style={[styles.footerOverlay, {backgroundColor}]} />
        <View style={styles.footerContent}>
          <View style={styles.dotsContainer}>
            {slides.map((_, index) => (<Dot key={`slide-dot-${index}`} currentIndex={divide(x, width)} {...{index}} />))}
          </View>
          <Animated.View style={{flex: 1, flexDirection: 'row', width: width * slides.length, transform: [{translateX: multiply(x, -1)}]}}>
            {slides.map(({contentTitle, contentDesc}, index) => {
              const last = index === slides.length - 1;
              return(<SubSlide key={`sub-slide-item-${index}`} {...{contentTitle, contentDesc, onPress: () => onPress(index, last, navigation), last}} />)
            })}
          </Animated.View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'white'},
  slider: {height: SLIDE_HEIGHT, borderBottomRightRadius: theme.borderRadii.xl},
  footer: {flex: 1},
  footerOverlay: {...StyleSheet.absoluteFillObject},
  dotsContainer: {...StyleSheet.absoluteFillObject, height: theme.borderRadii.xl, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'},
  footerContent: {flex: 1, backgroundColor: 'white', borderTopLeftRadius: theme.borderRadii.xl},
  underlay: {...StyleSheet.absoluteFillObject, justifyContent: 'flex-end', alignItems: 'center', overflow: 'hidden', borderBottomRightRadius: theme.borderRadii.xl},
  underlayPicture: {...StyleSheet.absoluteFillObject}
});

export default OnBoarding;