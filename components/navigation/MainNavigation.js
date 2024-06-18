import { View, Image } from "react-native";
import React from "react";
import HomeTab from "./HomeTab";
import AboutTab from "./AboutTab";
import ServicesTab from "./ServicesTab";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { createDrawerNavigator } from "@react-navigation/drawer";
import EventsScreen from "../screens/EventsScreen";
import CalendarScreen from "../screens/CalendarScreen";
import JoinedEventsScreen from "../screens/JoinedEventsScreen";
import Dropdown from "../elements/Dropdown";

// COMMENT:
// Gi nest nako ang drawer nav dria para sa event tab only

const Tab = createBottomTabNavigator();

const Drawer = createDrawerNavigator();

export function Event() {
  return (
    <Drawer.Navigator
      initialRouteName="Events"
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
        headerTitle: () => (
          <View
            style={{
              alignItems: "center",
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <Image
              style={{ width: 150, height: 150 }}
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
      <Drawer.Screen name="Events" component={EventsScreen} />
      <Drawer.Screen name="Calendar" component={CalendarScreen} />
      <Drawer.Screen name="Joined Events" component={JoinedEventsScreen} />
    </Drawer.Navigator>
  );
}

export default function MainNavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = "home";
            } else if (route.name === "MyDrawer") {
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
        <Tab.Screen name="Home" component={HomeTab} />
        <Tab.Screen name="MyDrawer" component={Event} />
        <Tab.Screen name="About" component={AboutTab} />
        <Tab.Screen name="Services" component={ServicesTab} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
