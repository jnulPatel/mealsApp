import { Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
const IconButton = ({ onPress, name }) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && { opacity: 0.75 }}
    >
      <Ionicons name={name} size={24} color="white" />
    </Pressable>
  );
};

export default IconButton;

const styles = StyleSheet.create({});
