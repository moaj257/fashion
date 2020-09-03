import React from 'react';
import Svg, { Path } from 'react-native-svg';
import theme, { Box } from './theme';

const SIZE = theme.borderRadii.l;

const Apple = () => (
  <Svg height={24} width={24} viewBox="0 0 305 305" fill="#000">
    <Path d="M40.738 112.119c-25.785 44.745-9.393 112.648 19.121 153.82C74.092 286.523 88.502 305 108.239 305c.372 0 .745-.007 1.127-.022 9.273-.37 15.974-3.225 22.453-5.984 7.274-3.1 14.797-6.305 26.597-6.305 11.226 0 18.39 3.101 25.318 6.099 6.828 2.954 13.861 6.01 24.253 5.815 22.232-.414 35.882-20.352 47.925-37.941 12.567-18.365 18.871-36.196 20.998-43.01l.086-.271a2.5 2.5 0 00-1.328-3.066c-.032-.015-.15-.064-.183-.078-3.915-1.601-38.257-16.836-38.618-58.36-.335-33.736 25.763-51.601 30.997-54.839l.244-.152a2.498 2.498 0 00.71-3.511c-18.014-26.362-45.624-30.335-56.74-30.813a50.043 50.043 0 00-4.95-.242c-13.056 0-25.563 4.931-35.611 8.893-6.936 2.735-12.927 5.097-17.059 5.097-4.643 0-10.668-2.391-17.645-5.159-9.33-3.703-19.905-7.899-31.1-7.899-.267 0-.53.003-.789.008-26.03.383-50.626 15.275-64.186 38.859z" />
    <Path d="M212.101.002c-15.763.642-34.672 10.345-45.974 23.583-9.605 11.127-18.988 29.679-16.516 48.379a2.499 2.499 0 002.284 2.164c1.064.083 2.15.125 3.232.126 15.413 0 32.04-8.527 43.395-22.257 11.951-14.498 17.994-33.104 16.166-49.77a2.515 2.515 0 00-2.587-2.225z" />
  </Svg>
);

const Facebook = () => (
  <Svg height={24} width={24} viewBox="0 0 24 24">
    <Path
      d="M15.997 3.985h2.191V.169C17.81.117 16.51 0 14.996 0 8.064 0 9.95 7.85 9.674 9H6.187v4.266h3.486V24h4.274V13.267h3.345l.531-4.266h-3.877c.188-2.824-.761-5.016 2.051-5.016z"
      fill="#3b5999"
    />
  </Svg>
);

const Google = () => (
  <Svg height={24} width={24} viewBox="0 0 512 512">
    <Path
      d="M492.668 211.489l-208.84-.01c-9.222 0-16.697 7.474-16.697 16.696v66.715c0 9.22 7.475 16.696 16.696 16.696h117.606c-12.878 33.421-36.914 61.41-67.58 79.194L384 477.589c80.442-46.523 128-128.152 128-219.53 0-13.011-.959-22.312-2.877-32.785-1.458-7.957-8.366-13.785-16.455-13.785z"
      fill="#167ee6"
    />
    <Path
      d="M256 411.826c-57.554 0-107.798-31.446-134.783-77.979l-86.806 50.034C78.586 460.443 161.34 512 256 512c46.437 0 90.254-12.503 128-34.292v-.119l-50.147-86.81c-22.938 13.304-49.482 21.047-77.853 21.047z"
      fill="#12b347"
    />
    <Path
      d="M384 477.708v-.119l-50.147-86.81c-22.938 13.303-49.48 21.047-77.853 21.047V512c46.437 0 90.256-12.503 128-34.292z"
      fill="#0f993e"
    />
    <Path
      d="M100.174 256c0-28.369 7.742-54.91 21.043-77.847l-86.806-50.034C12.502 165.746 0 209.444 0 256s12.502 90.254 34.411 127.881l86.806-50.034c-13.301-22.937-21.043-49.478-21.043-77.847z"
      fill="#ffd500"
    />
    <Path
      d="M256 100.174c37.531 0 72.005 13.336 98.932 35.519 6.643 5.472 16.298 5.077 22.383-1.008l47.27-47.27c6.904-6.904 6.412-18.205-.963-24.603C378.507 23.673 319.807 0 256 0 161.34 0 78.586 51.557 34.411 128.119l86.806 50.034c26.985-46.533 77.229-77.979 134.783-77.979z"
      fill="#ff4b26"
    />
    <Path
      d="M354.932 135.693c6.643 5.472 16.299 5.077 22.383-1.008l47.27-47.27c6.903-6.904 6.411-18.205-.963-24.603C378.507 23.672 319.807 0 256 0v100.174c37.53 0 72.005 13.336 98.932 35.519z"
      fill="#d93f21"
    />
  </Svg>
);

const SocialIcon = ({children}) => (
  <Box marginHorizontal="m" backgroundColor="white" width={44} height={44} borderRadius="l" justifyContent="center" alignItems="center">
    {children}
  </Box>
);

const SocialLogin = () => (
  <Box flexDirection="row" justifyContent="center">
    <SocialIcon>
      <Google />
    </SocialIcon>
    <SocialIcon>
      <Facebook />
    </SocialIcon>
    <SocialIcon>
      <Apple />
    </SocialIcon>
  </Box>
);

export default SocialLogin;