import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import CustomHeader from "../elements/CustomHeader";

export default function CalendarScreen() {
  const navigation = useNavigation();
  const buttons = [
    { title: "Events", screen: "EventsStack" },
    { title: "Calendar", screen: "Calendar" },
    { title: "Joined Events", screen: "JoinedEvents" },
  ];

  const handlePress = (screen) => {
    navigation.navigate(screen);
  };

  // Placeholder function to handle date selection or any other calendar actions
  const handleDateSelect = (date) => {
    // Handle date selection
    console.log("Selected date:", date);
  };

  return (
    <ImageBackground style={styles.background}>
      <View style={styles.screenContainer}>
        <CustomHeader
          title="Your Screen Title"
          onBackPress={() => navigation.goBack()}
        />
      </View>
      <ScrollView style={styles.container}>
        <View style={styles.buttonContainer}>
          {buttons.map((button) => (
            <TouchableOpacity
              key={button.screen}
              style={[
                styles.button,
                navigation.getState().routes[navigation.getState().index]
                  .name === button.screen
                  ? styles.activeButton
                  : styles.inactiveButton,
              ]}
              onPress={() => handlePress(button.screen)}
            >
              <Text
                style={[
                  styles.buttonText,
                  navigation.getState().routes[navigation.getState().index]
                    .name === button.screen && styles.activeButtonText,
                ]}
              >
                {button.title}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <Text style={styles.title}>Calendar</Text>
        {/* Placeholder for calendar component */}
        <View style={styles.calendarContainer}>
          <Text onPress={() => handleDateSelect(new Date())}>
            Tap to select a date (Placeholder)
          </Text>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  background: {
    backgroundColor: "black",
    flexGrow: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "white",
  },
  calendarContainer: {
    // Style your calendar container
    padding: 20,
    borderWidth: 1,
    borderColor: "#d3d3d3",
    borderRadius: 10,
    marginBottom: 20,
    backgroundColor: "white",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 20,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "#FFC42B",
    backgroundColor: "rgba(255,196,43,0.2)",
  },
  activeButton: {
    backgroundColor: "#FFC42B",
  },
  inactiveButton: {
    backgroundColor: "transparent",
  },
  buttonText: {
    fontSize: 16,
    color: "#FFC42B", // Color for inactive buttons
    textAlign: "center",
  },
  activeButtonText: {
    color: "black", // Color for active button text
  },
});
