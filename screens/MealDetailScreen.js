import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect } from "react";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import Description from "../components/MealDetail/Description";
import IconButton from "../components/IconButton";
// import { FavoritesContext } from "../store/context/favorites-context";
import { useDispatch, useSelector } from "react-redux";
import {
  addFavorite,
  removeFavorite,
} from "../store/redux/slices/favoritesSlice";

const MealDetailScreen = ({ route, navigation }) => {
  const mealId = route.params.mealId;
  const displayMealDetail = MEALS.find((element) => element.id === mealId);
  // const FavMealsCtx = useContext(FavoritesContext);
  const FavMealsId = useSelector((state) => state.favoriteMeals.ids);
  const dispatch = useDispatch();
  // const FavMeal = FavMealsCtx.ids.includes(mealId);
  const FavMeal = FavMealsId.includes(mealId);
  function headerbtnPressHandler() {
    FavMeal
      ? dispatch(removeFavorite({ id: mealId }))
      : dispatch(addFavorite({ id: mealId }));
  }
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitleAlign: "center",
      headerRight: () => {
        return (
          <IconButton
            name={FavMeal ? "star" : "star-outline"}
            onPress={headerbtnPressHandler}
          />
        );
      },
    });
  }, [navigation, headerbtnPressHandler]);
  return (
    <ScrollView style={styles.root}>
      <Image source={{ uri: displayMealDetail.imageUrl }} style={styles.img} />
      <Text style={styles.title}>{displayMealDetail.title}</Text>
      <MealDetails
        duration={displayMealDetail.duration}
        complexity={displayMealDetail.complexity}
        affordability={displayMealDetail.affordability}
        style={styles.mealDetail}
      />
      <View style={styles.listContainer}>
        <View style={styles.listInnerContainer}>
          <Subtitle>Ingredients</Subtitle>
          <Description data={displayMealDetail.ingredients} />
          <Subtitle>Steps</Subtitle>
          <Description data={displayMealDetail.steps} />
        </View>
      </View>
    </ScrollView>
  );
};

export default MealDetailScreen;

const styles = StyleSheet.create({
  root: {
    marginBottom: 20,
  },
  img: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 24,
    margin: 8,
    color: "white",
  },
  mealDetail: {
    color: "white",
  },
  listInnerContainer: {
    maxWidth: "85%",
    justifyContent: "center",
    alignItems: "stretch",
  },
  listContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
});
