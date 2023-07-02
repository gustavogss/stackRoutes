import React from 'react';
import { Home } from '../pages/Home';
import { About } from '../pages/About';
import { Contact } from '../pages/Contact';
import {Feather} from '@expo/vector-icons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

const Tab = createBottomTabNavigator();

export function TabRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,        
        tabBarHideOnKeyboard: true,        
        tabBarActiveTintColor: '#f8f8f6',
        tabBarStyle: {
          backgroundColor: '#212121',
          borderTopWidth: 0,           
        }
      }}
    >
      <Tab.Screen 
      name='homeTab'
      component={Home} 
      options={{       
        tabBarIcon: ({color, size})=>{
            return <Feather name='home' color={'#eee'} size={24}/>
        },
       tabBarLabel: 'Inicio',
      }}
      />
      <Tab.Screen 
      name='aboutTab' 
      component={About}
      options={{       
        tabBarIcon: ({color, size})=>{
            return <Feather name='file-text' color={'#eee'} size={24}/>
        },   
        tabBarLabel: 'Sobre',     
      }}
       />
      <Tab.Screen 
      name='contactTab' 
      component={Contact} 
      options={{        
        tabBarIcon: ({color, size})=>{
            return <Feather name='phone' color={'#eee'} size={24}/>
        },  
        tabBarLabel: 'Contato',      
      }}
      />
    </Tab.Navigator>
  )
}