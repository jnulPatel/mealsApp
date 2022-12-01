import { Platform, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

const CatogoryGridTile = ({ title, color, onPress }) => {
  return (
    <View
      style={[
        styles.catagoryRoot,
        Platform.OS === "android" && { backgroundColor: color },
      ]}
    >
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) =>
          Platform.OS === "ios" && pressed
            ? [styles.btn, { opacity: 0.5 }]
            : styles.btn
        }
        onPress={onPress}
      >
        <View
          style={[
            styles.innerContainer,
            Platform.OS === "ios" && { backgroundColor: color },
          ]}
        >
          <Text style={styles.catagoryText}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CatogoryGridTile;

const styles = StyleSheet.create({
  catagoryRoot: {
    flex: 1,
    height: 150,
    borderRadius: 8,
    elevation: 4,
    margin: 16,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 4, height: 4 },
    shadowRadius: 8,
    overflow: Platform.select({ ios: "visible", android: "hidden" }),
  },
  btn: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  catagoryText: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
