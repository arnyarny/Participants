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

export default function AboutScreen({ navigation }) {
  return (
    <ImageBackground style={styles.background}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.text}>
          EDIT ME! EDIT ME! EDIT ME! EDIT ME! EDIT ME! EDIT ME! EDIT ME! EDIT
          ME! EDIT ME! EDIT ME! EDIT ME! EDIT ME! EDIT ME! EDIT ME! EDIT ME!
          EDIT ME! EDIT ME! EDIT ME! EDIT ME! EDIT ME! EDIT ME! EDIT ME! EDIT
          ME! EDIT ME! EDIT ME! EDIT ME! EDIT ME! EDIT ME! EDIT ME! EDIT ME!
          EDIT ME! EDIT ME! EDIT ME! EDIT ME! EDIT ME! EDIT ME! EDIT ME! EDIT
          ME! EDIT ME! EDIT ME! EDIT ME! EDIT ME! EDIT ME! EDIT ME! EDIT ME!
          EDIT ME!
        </Text>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  text: {
    color: "white",
    fontSize: 42,
  },
  background: {
    backgroundColor: "black",
    flexGrow: 1,
  },
});
