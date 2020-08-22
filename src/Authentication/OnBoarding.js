import React, { useRef } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import Slide, {SLIDE_HEIGHT, BORDER_RADIUS} from './Slide';
import { interpolateColor, useScrollHandler } from 'react-native-redash';
import Animated, { multiply, divide } from 'react-native-reanimated';
import SubSlide from './SubSlide';
import Dot from './Dot';

const {width} = Dimensions.get('window');

const slides = [
  {label: 'Relaxed', contentTitle: 'Find Your Outfits', contentDesc: 'Confused about your outfit? Don\'t worry! Find the best outfit here.', color: '#BFEAF5', picture: require('../../assets/onboarding/1.png')},
  {label: 'Playful', contentTitle: 'Hear it First, Wear it First', contentDesc: 'Hating the clothes in your wardrobe? Explore hundreds of outfit ideas.', color: '#BEECC4', picture: require('../../assets/onboarding/2.png')},
  {label: 'Excentric', contentTitle: 'Your Style, Your Way', contentDesc: 'Create your individual & unique style and look amazing everyday.', color: '#FFE4D9', picture: require('../../assets/onboarding/3.png')},
  {label: 'Funky', contentTitle: 'Look Good, Feel Good', contentDesc: 'Discover the latest trends in fashion and explore your personality.', color: '#FFDDDD', picture: require('../../assets/onboarding/4.png')},
];

const OnBoarding = () => {
  const scroll = useRef(null);
  const {scrollHandler, x} = useScrollHandler();
  const backgroundColor = interpolateColor(x, {
    inputRange:  slides.map((_, i) => i * width),
    outputRange: slides.map(slide => slide.color),
  });
  const onPress = index => {
    if(scroll.current){index
      scroll.current.getNode().scrollTo({x: width * (index + 1), animated: true});
    }
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.slider, {backgroundColor}]}>
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
            {slides.map(({contentTitle, contentDesc}, index) => (
              <SubSlide key={`sub-slide-item-${index}`} {...{contentTitle, contentDesc, onPress: () => onPress(index), last: index === slides.length - 1}} />
            ))}
          </Animated.View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'white'},
  slider: {height: SLIDE_HEIGHT, borderBottomRightRadius: BORDER_RADIUS},
  footer: {flex: 1},
  footerOverlay: {...StyleSheet.absoluteFillObject},
  dotsContainer: {...StyleSheet.absoluteFillObject, height: BORDER_RADIUS, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'},
  footerContent: {flex: 1, backgroundColor: 'white', borderTopLeftRadius: BORDER_RADIUS}
});

export default OnBoarding;