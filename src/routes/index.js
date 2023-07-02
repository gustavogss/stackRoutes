import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { DrawerRoutes } from './drawerRoutes';

export function Routes() {
  return (
   <NavigationContainer>
        <DrawerRoutes />
   </NavigationContainer>
  )
}