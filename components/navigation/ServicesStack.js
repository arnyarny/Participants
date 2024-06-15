import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ServicesScreen from "../screens/ServicesScreen";

const Stack = createStackNavigator();

export default function ServicesStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ServicesStack"
        component={ServicesScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
