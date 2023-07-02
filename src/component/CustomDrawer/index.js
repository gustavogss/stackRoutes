import { View, StyleSheet, Text, Image } from 'react-native';
import React from 'react';
import logo from '../../assets/logo.png';
import {DrawerContentScrollView, DrawerItemList} from '@react-navigation/drawer'

export function CustomDrawer(props) {
  return (
    <DrawerContentScrollView {...props}>
     <View style={styles.container}>
        <Image style={styles.logo} source={logo}/>
        <Text style={styles.perfil}>Mobile Developer</Text>
     </View>
     <DrawerItemList {...props}/>     
    </DrawerContentScrollView>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        height: 120,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        marginBottom: 20
    },
    logo:{
      width: 80,
      height: 80      
    },
    perfil:{
      textAlign: 'center', 
      padding: 20,    
      fontSize: 16,
      fontWeight: '500',
      color: '#eee'
    },    
});