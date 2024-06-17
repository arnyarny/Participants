import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  ImageBackground,
  onChangeSearch,
  searchQuery,
} from "react-native";
import { Searchbar } from "react-native-paper";
import Header from "../elements/Header";

export default function EventsScreen({ navigation }) {
  return (
    <ImageBackground style={styles.background}>
      <Header />
      <ScrollView contentContainerStyle={styles.container}>
        <Searchbar
          placeholder="Search Event"
          onChangeText={onChangeSearch}
          value={searchQuery}
          style={styles.searchBar}
        />
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
  searchBar: { marginTop: 10 },
});
