import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import { Home } from '../pages/Home';
import { About } from '../pages/About';
import { Contact } from '../pages/Contact';
import {Feather} from '@expo/vector-icons';
import {TabRoutes} from './tabRoutes';
import { CustomDrawer } from '../component/CustomDrawer';

const Drawer = createDrawerNavigator();

export function DrawerRoutes() {
  return (
    <Drawer.Navigator   
    drawerContent={CustomDrawer}
    screenOptions={{
      title: '',
      drawerStyle:{
        backgroundColor: '#121212',
      },
     
      drawerActiveBackgroundColor: '#212121',
      drawerActiveTintColor: '#ccc',
      drawerInactiveTintColor: '#aaa'
    }}
    >
      <Drawer.Screen
       name='homeDrawer' 
       component={TabRoutes}
       options={{
        drawerIcon: ({color, size}) =>{
          return <Feather name='home' size={24} color={'#ccc'}/>
        },
        drawerLabel: 'Inicio',
       }}
       />
      <Drawer.Screen 
      name='aboutDrawer' 
      component={About}
      options={{
        drawerIcon: ({color, size}) =>{
          return <Feather name='file-text' size={24} color={'#ccc'}/>
        },
        drawerLabel: 'Sobre',
       }}
      />
      <Drawer.Screen 
      name='contactDrawer' 
      component={Contact}
      options={{
        drawerIcon: ({color, size}) =>{
          return <Feather name='phone' size={24} color={'#ccc'}/>
        },
        drawerLabel: 'Contato',
       }}
      />
    </Drawer.Navigator>
  )
}