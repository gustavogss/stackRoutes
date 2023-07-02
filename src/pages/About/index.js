import { View, Text, StyleSheet } from "react-native";
import React from "react";

export function About() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sobre</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#067306",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "#ffffff",
    fontSize: 30,
    fontWeight: "500",
  },
});
