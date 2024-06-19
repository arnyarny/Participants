import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AboutScreen from "../screens/AboutScreen";

const Stack = createStackNavigator();

export default function AboutTab({ navigation }) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="AboutStack" component={AboutScreen} />
      {/* Add more screens here as needed */}
    </Stack.Navigator>
  );
}
