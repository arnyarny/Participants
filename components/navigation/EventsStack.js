import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import EventsScreen from "../screens/EventsScreen";

const Stack = createStackNavigator();

export default function EventsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="EventsStack"
        component={EventsScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
