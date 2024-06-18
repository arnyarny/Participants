import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  ImageBackground,
  onChangeSearch,
  searchQuery,
} from "react-native";
import { Searchbar } from "react-native-paper";
import ImageCards from "../elements/ImageCards";
import CarouselView from "../elements/CarouselView";

export default function EventsScreen() {
  const renderItem = ({ item }) => (
    <View>
      <Image source={item.image} />
      <Text>{item.title}</Text>
    </View>
  );

  return (
    <ImageBackground style={styles.background}>
      <ScrollView contentContainerStyle={styles.container}>
        <Searchbar
          placeholder="Search Event"
          onChangeText={onChangeSearch}
          value={searchQuery}
          style={styles.searchBar}
        />
        <CarouselView />
        <Text style={styles.title}>EVENTS</Text>
        <ImageCards />
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
  searchBar: { marginTop: 10, marginBottom: 20 },
  title: {
    color: "#FFC42B",
    fontSize: 25,
    fontWeight: "700",
    marginBottom: 20,
  },
});
