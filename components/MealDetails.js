import { StyleSheet, Text, View } from "react-native";
import React from "react";

const MealDetails = ({ duration, complexity, affordability, style }) => {
  return (
    <View style={[styles.details, style]}>
      <Text style={[styles.detailItem, style]}>{duration}min</Text>
      <Text style={[styles.detailItem, style]}>{complexity.toUpperCase()}</Text>
      <Text style={[styles.detailItem, style]}>
        {affordability.toUpperCase()}
      </Text>
    </View>
  );
};

export default MealDetails;

const styles = StyleSheet.create({
  details: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
});
