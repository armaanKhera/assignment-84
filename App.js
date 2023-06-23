import 'react-native-gesture-handler';
import React from "react";
import TabNav from "./app/Navigation/tabNavigator";
import DrawerNavigator from './app/Navigation/drawerNavigator';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
      <DrawerNavigator/>
    </NavigationContainer>
  )
}