import { View, Image } from "react-native";
import React from "react";
import HomeTab from "./HomeTab";
import AboutTab from "./AboutTab";
import ServicesTab from "./ServicesTab";
import EventsTab from "./EventsTab";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { createStackNavigator } from "@react-navigation/stack";
import ProfileScreen from "../screens/ProfileScreen";
import NotificationsScreen from "../screens/NotificationsScreen";
import Budget from "../screens/Budget";
import EventPortfolio from "../screens/EventPortfolioScreen";
import EventDetails from "../screens/EventDetails";
import SelectContactViewScreen from "../screens/SelectedContactViewScreen";
import ConversationViewScreen from "../screens/ConversationViewScreen";

const Tab = createBottomTabNavigator();

const RootStack = createStackNavigator();

export default function MainNavigation() {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "black", // Replace 'yourColor' with your desired color
          },
          headerTintColor: "#fff", // This changes the color of the back button and title
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <RootStack.Screen name="MainTabs" options={{ headerShown: false }}>
          {() => (
            <Tab.Navigator
              screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                  let iconName;

                  if (route.name === "Home") {
                    iconName = "home";
                  } else if (route.name === "Event") {
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
              <Tab.Screen name="Event" component={EventsTab} />
              <Tab.Screen name="About" component={AboutTab} />
              <Tab.Screen name="Services" component={ServicesTab} />
            </Tab.Navigator>
          )}
        </RootStack.Screen>
        <RootStack.Screen name="Profile" component={ProfileScreen} />
        <RootStack.Screen name="Notification" component={NotificationsScreen} />
        <RootStack.Screen name="Event Details" component={EventDetails} />
        <RootStack.Screen name="Budget" component={Budget} />
        <RootStack.Screen name="Event Portfolio" component={EventPortfolio} />
        <RootStack.Screen
          name="SelectContactView"
          component={SelectContactViewScreen}
        />
        <RootStack.Screen
          name="ConversationView"
          component={ConversationViewScreen}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
