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
import CustomHeader from "../elements/CustomHeader";

export default function ServicesScreen({ navigation }) {
  return (
    <ImageBackground style={styles.background}>
      <View style={styles.screenContainer}>
        <CustomHeader
          title="Your Screen Title"
          onBackPress={() => navigation.goBack()}
        />
      </View>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.text}>s</Text>
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
