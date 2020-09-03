import * as React from 'react';
import {ThemeProvider} from '@shopify/restyle';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import LoadAssets from './src/components/LoadAssets';
import theme from './src/components/theme';
import {assets as onBoardingAssets} from './src/Authentication/OnBoarding';
import {assets as welcomeAssets} from './src/Authentication/Welcome';
import { AuthenticationNavigator } from './src/Authentication';

const assets = [...onBoardingAssets, ...welcomeAssets];

const fonts = {
  "SFProDisplay-Bold": require("./assets/fonts/SF-Pro-Display-Bold.otf"),
  "SFProDisplay-Semibold": require("./assets/fonts/SF-Pro-Display-Semibold.otf"),
  "SFProDisplay-Regular": require("./assets/fonts/SF-Pro-Display-Regular.otf"),
  "SFProDisplay-Medium": require("./assets/fonts/SF-Pro-Display-Medium.otf"),
};

export default function App() {
  return (
    <ThemeProvider {...{theme}}>
      <LoadAssets {...{fonts, assets}}>
        <SafeAreaProvider>
          <AuthenticationNavigator />
        </SafeAreaProvider>
      </LoadAssets>
    </ThemeProvider>
  );
}