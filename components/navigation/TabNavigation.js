import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React from "react";
import HomeStack from "./HomeStack";
import EventsStack from "./EventsStack";
import AboutStack from "./AboutStack";
import ServicesStack from "./ServicesStack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Tab = createBottomTabNavigator();

export default function TabNavigation({ navigation }) {
  return (
    <NavigationContainer>
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
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = "home";
            } else if (route.name === "Events") {
              iconName = "calendar";
            } else if (route.name === "About") {
              iconName = "information";
            } else if (route.name === "Services") {
              iconName = "briefcase";
            }

            return (
              <View style={{ width: "100%", alignItems: "center" }}>
                {focused && (
                  <View
                    style={{
                      marginTop: 5,
                      height: 3,
                      width: "50%",
                      backgroundColor: "black",
                      borderRadius: 30,
                    }}
                  />
                )}
                <MaterialCommunityIcons
                  name={iconName}
                  size={size}
                  color={color}
                  style={{ paddingTop: 5 }}
                />
              </View>
            );
          },
          tabBarActiveTintColor: "black",
          tabBarInactiveTintColor: "black",
          tabBarStyle: { backgroundColor: "#FFC42B" },
          tabBarStyle: {
            backgroundColor: "#FFC42B",
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            position: "absolute",
            bottom: 0,
            padding: 10,
            height: 60,
            zIndex: 8,
          },
          headerShown: false,
          tabBarLabel: "",
        })}
      >
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Events" component={EventsStack} />
        <Tab.Screen name="About" component={AboutStack} />
        <Tab.Screen name="Services" component={ServicesStack} />
      </Tab.Navigator>
    </NavigationContainer>
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
