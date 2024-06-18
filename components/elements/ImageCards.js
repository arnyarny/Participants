import React from "react";
import { View, TouchableOpacity, Image, StyleSheet } from "react-native";

// COMMENT:
// Mao ni tung sa EventScreen na naay mga clickable event types

const images = [
  require("../pictures/birthdaycard.png"),
  require("../pictures/summitscard.png"),
  require("../pictures/reunioncard.png"),
  require("../pictures/concertscard.png"),
  require("../pictures/festivalcard.png"),
  require("../pictures/weddingcard.png"),
];

const ImageCards = () => {
  return (
    <View style={styles.container}>
      {images.map((image, index) => (
        <TouchableOpacity key={index} style={styles.card}>
          <Image source={image} style={styles.image} />
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    alignItems: "center",
    marginBottom: 70,
  },
  card: {
    margin: 1,
    width: "40%",
    height: 190,
  },
  image: {
    width: "100%", // Make the image take up the full width of the card
    height: "100%", // Set the height as needed
    resizeMode: "contain", // Adjust the resize mode as needed
  },
});

export default ImageCards;
