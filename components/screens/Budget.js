import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  ScrollView,
  Image,
} from "react-native";

const Budget = () => {
  const [budgetLeft, setBudgetLeft] = useState(1500900);
  const [totalBudget] = useState(2500000);
  const [expenses, setExpenses] = useState({
    foodCatering: -50000,
    venue: -200000,
    reception: -200000,
    photography: -200000,
    otherAmenities: -200000,
  });
  const [statusOverview, setStatusOverview] = useState({
    foodCatering: "Scheduled",
    photography: "Scheduled",
  });

  const handleExpenseChange = (key, value) => {
    const updatedExpenses = { ...expenses, [key]: parseInt(value, 10) || 0 };
    setExpenses(updatedExpenses);
    const totalExpenses = Object.values(updatedExpenses).reduce(
      (acc, curr) => acc + curr,
      0
    );
    setBudgetLeft(totalBudget + totalExpenses);
  };

  return (
    <View style={styles.container}>
      <View style={styles.navBarContainer}>
        <Image
          source={{
            uri: "https://img.icons8.com/material-outlined/24/ffffff/menu--v3.png",
          }}
          style={styles.menuIcon}
        />
        <Text style={styles.navBarText}>
          <Text style={styles.navBarTextBold}>Event</Text>Wise
        </Text>
        <Image
          source={{
            uri: "https://img.icons8.com/material-outlined/24/ffffff/user--v1.png",
          }}
          style={styles.userIcon}
        />
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.budgetContainer}>
          <View style={styles.budgetHeader}>
            <Text style={styles.budgetTitle}>Wedding Budget</Text>
            <Text style={styles.budgetText}>
              ₱
              <Text style={styles.budgetLeft}>
                {budgetLeft.toLocaleString()}
              </Text>{" "}
              left out of ₱
              <Text style={styles.totalBudget}>
                {totalBudget.toLocaleString()}
              </Text>
            </Text>
            <Button
              title="Create New Budget"
              color="#FFC700"
              onPress={() => {}}
            />
          </View>

          <View style={styles.expenses}>
            <Text style={styles.sectionTitle}>Expenses</Text>
            {Object.keys(expenses).map((key) => (
              <View key={key} style={styles.expenseItem}>
                <Text style={styles.expenseText}>
                  {key.split(/(?=[A-Z])/).join(" & ")}
                </Text>
                <TextInput
                  style={styles.expenseInput}
                  keyboardType="numeric"
                  value={expenses[key].toString()}
                  onChangeText={(value) => handleExpenseChange(key, value)}
                />
              </View>
            ))}
          </View>

          <View style={styles.statusOverview}>
            <Text style={styles.sectionTitle}>Status Overview</Text>
            {Object.keys(statusOverview).map((key) => (
              <View key={key} style={styles.statusItem}>
                <Text style={styles.statusText}>
                  {key.split(/(?=[A-Z])/).join(" & ")}
                </Text>
                <TextInput
                  style={styles.statusInput}
                  value={statusOverview[key]}
                  onChangeText={(value) =>
                    setStatusOverview({ ...statusOverview, [key]: value })
                  }
                />
              </View>
            ))}
          </View>

          <Button title="Submit" color="#FFC700" onPress={() => {}} />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
  },
  navBarContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#000",
    padding: 10,
  },
  menuIcon: {
    width: 24,
    height: 24,
  },
  navBarText: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "normal",
  },
  navBarTextBold: {
    color: "#FFC700",
    fontWeight: "bold",
  },
  userIcon: {
    width: 24,
    height: 24,
  },
  scrollContainer: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  budgetContainer: {
    width: "100%",
    backgroundColor: "#1E1E1E",
    padding: 20,
    borderRadius: 10,
  },
  budgetHeader: {
    marginBottom: 20,
  },
  budgetTitle: {
    textAlign: "center",
    fontSize: 24,
    color: "#FFC700",
  },
  budgetText: {
    textAlign: "center",
    color: "#FFC700",
    marginVertical: 10,
  },
  budgetLeft: {
    fontWeight: "bold",
  },
  totalBudget: {
    fontWeight: "bold",
  },
  expenses: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    color: "#FFFFFF",
    marginBottom: 10,
    borderBottomColor: "#FFC700",
    borderBottomWidth: 2,
    paddingBottom: 5,
  },
  expenseItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    borderBottomColor: "#FFC700",
    borderBottomWidth: 1,
  },
  expenseText: {
    color: "#FFC700",
  },
  expenseInput: {
    width: 100,
    textAlign: "right",
    color: "#FFC700",
    borderBottomColor: "#FFC700",
    borderBottomWidth: 1,
  },
  statusOverview: {
    marginBottom: 20,
  },
  statusItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    borderBottomColor: "#FFC700",
    borderBottomWidth: 1,
  },
  statusText: {
    color: "#FFC700",
  },
  statusInput: {
    width: 100,
    textAlign: "right",
    color: "#FFC700",
    borderBottomColor: "#FFC700",
    borderBottomWidth: 1,
  },
});

export default Budget;
