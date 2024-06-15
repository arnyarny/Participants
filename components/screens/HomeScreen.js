import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.headerContainer}>
          <TouchableOpacity
            onPress={() => navigation.openDrawer()}
            style={styles.iconButton}
          >
            <MaterialCommunityIcons name="menu" size={24} color="white" />
          </TouchableOpacity>
          <Image
            source={require("../pictures/eventwise.png")}
            style={styles.logo}
            resizeMode="contain"
          />
          <TouchableOpacity
            onPress={() => navigation.navigate("Profile")}
            style={styles.iconButton}
          >
            <MaterialCommunityIcons
              name="account-circle"
              size={24}
              color="white"
            />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "black",
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 5,
    paddingTop: 10,
    backgroundColor: "black", // Set the background color to black
  },
  iconButton: {
    padding: 8,
  },
  logo: {
    flex: 1,
    height: 45,
    marginHorizontal: 16,
  },
});
