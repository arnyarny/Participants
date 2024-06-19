import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ServicesScreen from "../screens/ServicesScreen";

const Stack = createStackNavigator();

export default function AboutTab() {
  return (
    <Stack.Navigator
      initialRouteName="ServicesStack"
      screenOptions={{
        headerShown: false, // This will hide the header for all screens
      }}
    >
      <Stack.Screen name="ServicesStack" component={ServicesScreen} />
      {/* Add more screens here as needed */}
    </Stack.Navigator>
  );
}
