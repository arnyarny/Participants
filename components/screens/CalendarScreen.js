import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView,
} from "react-native";
import React from "react";

export default function CalendarScreen() {
  return (
    <ImageBackground style={styles.background}>
      <ScrollView contentContainerStyle={styles.container}></ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  background: {
    backgroundColor: "black",
    flexGrow: 1,
  },
});
