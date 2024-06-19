import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ImageBackground,
} from "react-native";
import CustomHeader from "../elements/CustomHeader";

export default function HomeScreen({ navigation }) {
  return (
    <ImageBackground style={styles.background}>
      <View style={styles.screenContainer}>
        <CustomHeader onBackPress={() => navigation.goBack()} />
      </View>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.text}>H</Text>
      </ScrollView>
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
  text: { color: "white" },
});
