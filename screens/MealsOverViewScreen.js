import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect } from "react";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";

const MealsOverViewScreen = ({ route, navigation }) => {
  const catId = route.params.catId;
  const displayedMeal = MEALS.filter((mealItem) =>
    mealItem.categoryIds.includes(catId)
  );

  const catagoryTitle = CATEGORIES.find(
    (catagory) => catagory.id === catId
  ).title;

  useLayoutEffect(
    () => navigation.setOptions({ title: catagoryTitle }),
    [catId, navigation]
  );

  return (
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

export default MealsOverViewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
