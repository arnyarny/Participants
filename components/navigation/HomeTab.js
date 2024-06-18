import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../screens/HomeScreen";
import { View, Image } from "react-native";
import Dropdown from "../elements/Dropdown";

const Drawer = createDrawerNavigator();

export default function AboutTab() {
  return (
    <Drawer.Navigator
      initialRouteName="HomeDrawer"
      screenOptions={{
        drawerActiveTintColor: "white", // Color for active item text
        drawerInactiveTintColor: "#848895", // Color for inactive item text
        drawerActiveBackgroundColor: "#FFC42B", // Color for active item text
        drawerInactiveBackgroundColor: "black", // Color for inactive item text
        drawerItemStyle: { borderRadius: 10 }, // Background color for all items
        drawerStyle: { backgroundColor: "black" },
        headerStyle: {
          backgroundColor: "black",
        },
        headerTintColor: "#fff",
        headerShown: true,
        headerLeft: false,
        headerTitle: () => (
          <View
            style={{
              alignItems: "center",
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <Image
              style={{ width: 150, height: 150, marginRight: 48 }}
              source={require("../pictures/eventwise.png")} // Replace with the path to your logo image
              resizeMode="contain"
            />
            <Dropdown
              iconSize={30}
              iconColor="white"
              options={[
                {
                  label: "Profile",
                  onPress: () => navigation.navigate("Profile"),
                },
                {
                  label: "Notifications",
                  onPress: () => navigation.navigate("Notifications"),
                },
                {
                  label: "Budgetting Overview",
                  onPress: () => navigation.navigate("BudgettingOverview"),
                },
                {
                  label: "Event Portfolio",
                  onPress: () => navigation.navigate("EventPortfolio"),
                },
                {
                  label: "Settings",
                  onPress: () => navigation.navigate("Settings"),
                },
                {
                  label: "Logout",
                  onPress: () => navigation.navigate("Logout"),
                },
              ]}
            />
          </View>
        ),
      }}
    >
      <Drawer.Screen name="HomeDrawer" component={HomeScreen} />
    </Drawer.Navigator>
  );
}
