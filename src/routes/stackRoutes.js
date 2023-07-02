import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import { Contact } from '../pages/Contact';

const Stack = createNativeStackNavigator();

export function StackRoutes() {
  return (
    <Stack.Navigator 
    screenOptions={{
      headerShown: false
    }}
    >
    <Stack.Screen name='contatoStack' component={Contact}/>
    </Stack.Navigator>
  )
}