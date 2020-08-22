import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {ThemeProvider} from '@shopify/restyle';
import LoadAssets from './src/components/LoadAssets';
import theme from './src/components/theme';
import OnBoarding, {assets as onBoardingAssets} from './src/Authentication/OnBoarding';
import Welcome, {assets as welcomeAssets} from './src/Authentication/Welcome';

const assets = [...onBoardingAssets, ...welcomeAssets];

const fonts = {
  "SFProDisplay-Bold": require("./assets/fonts/SF-Pro-Display-Bold.otf"),
  "SFProDisplay-Semibold": require("./assets/fonts/SF-Pro-Display-Semibold.otf"),
  "SFProDisplay-Regular": require("./assets/fonts/SF-Pro-Display-Regular.otf"),
  "SFProDisplay-Medium": require("./assets/fonts/SF-Pro-Display-Medium.otf"),
};

const AuthenticationStack = createStackNavigator();
const AuthenticationNavigator = () => (
  <AuthenticationStack.Navigator headerMode="none">
    <AuthenticationStack.Screen name="OnBoarding" component={OnBoarding} />
    <AuthenticationStack.Screen name="Welcome" component={Welcome} />
  </AuthenticationStack.Navigator>
)

export default function App() {
  return (
    <ThemeProvider {...{theme}}>
      <LoadAssets {...{fonts, assets}}>
        <AuthenticationNavigator />
      </LoadAssets>
    </ThemeProvider>
  );
}