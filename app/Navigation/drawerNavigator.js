import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import StackNavigator from './StackNavigator';
import TabNav from './tabNavigator';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={TabNav} />
      <Drawer.Screen name="Post" component={StackNavigator} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
