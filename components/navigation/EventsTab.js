import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import EventsScreen from "../screens/EventsScreen";
import CalendarScreen from "../screens/CalendarScreen";
import JoinedEventsScreen from "../screens/JoinedEventsScreen";

const Stack = createStackNavigator();

export default function EventsTab({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="EventsStack"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="EventsStack" component={EventsScreen} />
      <Stack.Screen name="Calendar" component={CalendarScreen} />
      <Stack.Screen name="JoinedEvents" component={JoinedEventsScreen} />
      {/* Add more screens here as needed */}
    </Stack.Navigator>
  );
}
