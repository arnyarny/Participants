import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  ImageBackground,
} from "react-native";
import Header from "../elements/Header";

export default function ServicesScreen({ navigation }) {
  return (
    <ImageBackground style={styles.background}>
      <Header />
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
