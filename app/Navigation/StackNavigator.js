import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import PostScreen from '../Screens/PostScreen';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="PostHere" component={PostScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
