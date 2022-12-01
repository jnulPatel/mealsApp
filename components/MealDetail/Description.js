import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Description = ({ data }) => {
  return data.map((item) => (
    <View style={styles.listItem} key={item}>
      <Text style={styles.listText}>{item}</Text>
    </View>
  ));
};

export default Description;

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: "#e2b497",
  },
  listText: {
    color: "#351401",
    textAlign: "center",
  },
});
