import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import OnBoarding from './OnBoarding';
import Welcome from './Welcome';
import Login from './Login';

const AuthenticationStack = createStackNavigator();
export const AuthenticationNavigator = () => (
  <AuthenticationStack.Navigator headerMode="none">
    <AuthenticationStack.Screen name="OnBoarding" component={OnBoarding} />
    <AuthenticationStack.Screen name="Welcome" component={Welcome} />
    <AuthenticationStack.Screen name="Login" component={Login} />
  </AuthenticationStack.Navigator>
)