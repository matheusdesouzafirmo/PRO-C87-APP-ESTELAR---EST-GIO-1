import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from "./screens/Home";
import IssLocationScreen from "./screens/IssLocation";
import MeteorScreen from "./screens/Meteors";
import UpdateScreen from "./screens/Updates";

const Steck = createStackNavigator();

export default function App() {
  return (
<NavigationContainer>
  <stack.navigator initialRouteName = 'Home' 
  screenOpitions = {{HeadersShown}}>
<stack.Screen name = "Home" componet= {HomeScreen}/>
<stack.Screen name = "IssLocationScreen" componet= {HomeScreen}/>
<stack.Screen name = "Meteors" componet= {HomeScreen}/>
  </stack.navigator>
</NavigationContainer>
  );
}

