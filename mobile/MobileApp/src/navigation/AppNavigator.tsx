import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RegisterScreen from '../screens/RegisterScreen';

import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';

export type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  Home: undefined;
};


const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{headerShown: false}}
        />
<Stack.Screen
  name="Register"
  component={RegisterScreen}
  options={{title: 'Register'}}
/>

        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Home'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
