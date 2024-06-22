import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import EventsScreen from "../screens/EventsScreen";
import CalendarScreen from "../screens/CalendarScreen";
import JoinedEventsScreen from "../screens/JoinedEventsScreen";
import BirthdayScreen from "../screens/BirthdayScreen";
import SummitScreen from "../screens/SummitScreen";
import ReunionScreen from "../screens/ReunionScreen";
import ConcertScreen from "../screens/ConcertScreen";
import FestivalScreen from "../screens/FestivalScreen";
import WeddingScreen from "../screens/WeddingScreen";
import SelectedEventsScreen from "../screens/SelectedEventScreen";
import FeedbackScreen from "../screens/FeedbackScreen";
import BookEventScreen from "../screens/BookEventScreen";
import EventDetails from "../screens/EventDetails";
import Feedback from "../screens/Feedback";
import CopyLinkScreen from "../screens/CopyLinkScreen";

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

      {/* 6 event types */}
      <Stack.Screen name="Birthday" component={BirthdayScreen} />
      <Stack.Screen name="Summit" component={SummitScreen} />
      <Stack.Screen name="Reunion" component={ReunionScreen} />
      <Stack.Screen name="Concert" component={ConcertScreen} />
      <Stack.Screen name="Festival" component={FestivalScreen} />
      <Stack.Screen name="Wedding" component={WeddingScreen} />

      {/* selected event screen */}
      <Stack.Screen name="SelectedEvent" component={SelectedEventsScreen} />
      <Stack.Screen name="BookEvent" component={BookEventScreen} />
      <Stack.Screen name="EventDetails" component={EventDetails} />
      <Stack.Screen name="CopyLink" component={CopyLinkScreen} />

      {/* Feedback screen */}
      <Stack.Screen name="Feedback" component={Feedback} />
    </Stack.Navigator>
  );
}
