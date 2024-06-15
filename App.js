import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { PaperProvider } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import TabNavigation from "./components/navigation/TabNavigation";

export default function App() {
  return (
    <PaperProvider style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        <TabNavigation />
      </SafeAreaView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
