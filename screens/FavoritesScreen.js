import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { FavoritesContext } from "../store/context/favorites-context";
import { MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";
import { useSelector } from "react-redux";

const FavoritesScreen = ({ navigation }) => {
  // const FavMeals = useContext(FavoritesContext);
  const FavMeals = useSelector((state) => state.favoriteMeals.ids);
  const displayedMeal = MEALS.filter((mealItem) =>
    FavMeals.includes(mealItem.id)
  );
  return FavMeals.length === 0 ? (
    <View style={styles.rootContainer}>
      <Text style={styles.text}>You have no Favorite meals yet.</Text>
    </View>
  ) : (
    <View style={styles.container}>
      <FlatList
        data={displayedMeal}
        keyExtractor={(item) => item.id}
        renderItem={(itemData) => (
          <MealItem
            title={itemData.item.title}
            imgURL={itemData.item.imageUrl}
            duration={itemData.item.duration}
            complexity={itemData.item.complexity}
            affordability={itemData.item.affordability}
            onPress={() =>
              navigation.navigate("MealDetail", {
                mealId: itemData.item.id,
                mealTitle: itemData.item.title,
              })
            }
          />
        )}
      />
    </View>
  );
};

export default FavoritesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});
