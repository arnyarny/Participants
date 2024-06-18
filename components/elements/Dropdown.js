import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

// COMMENT:
// Dropdown ni sya para sa tanan akoa giimport sa Header.js og TabBavigation.js

const Dropdown = ({ iconSize, iconColor, options }) => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => setDropdownVisible(!dropdownVisible)}
        style={styles.iconButton}
      >
        <MaterialCommunityIcons
          name="account-circle"
          size={iconSize}
          color={iconColor}
        />
      </TouchableOpacity>

      {dropdownVisible && (
        <View style={styles.dropdown}>
          {options.map((option, index) => (
            <TouchableOpacity
              key={index}
              style={styles.dropdownItem}
              onPress={() => {
                setDropdownVisible(false);
                option.onPress();
              }}
            >
              <Text style={styles.dropdownText}>{option.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "flex-end",
  },
  iconButton: {
    marginLeft: 130,
    // Other styles for the button
  },
  dropdown: {
    position: "absolute",
    top: 30, // Adjust as needed
    height: 270,
    backgroundColor: "black",
    borderRadius: 10,
    borderColor: "white",
    borderWidth: 1,
    alignItems: "flex-end",
    padding: 5,
  },
  dropdownItem: {
    padding: 10,
    // Styles for the dropdown items
  },
  dropdownText: {
    color: "white",
    // Text styles
  },
});

export default Dropdown;
