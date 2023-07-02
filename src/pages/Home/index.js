import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

export function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{      
        flex: 1, 
        backgroundColor: '#8f0a0a',
        color: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        color: "#ffffff",
        fontSize: 30,
        fontWeight: "500",
      },
});