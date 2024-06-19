import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import NotificationsScreen from "../screens/NotificationsScreen";
import Budget from "../screens/Budget";
import EventPortfolioScreen from "../screens/EventPortfolioScreen";
import SettingsScreen from "../screens/SettingsScreen";

const Stack = createStackNavigator();

export default function AboutTab() {
  return (
    <Stack.Navigator
      initialRouteName="HomeStack"
      screenOptions={{
        headerShown: false, // This will hide the header for all screens
      }}
    >
      <Stack.Screen name="HomeStack" component={HomeScreen} />

      {/* Add more screens here as needed */}
    </Stack.Navigator>
  );
}
