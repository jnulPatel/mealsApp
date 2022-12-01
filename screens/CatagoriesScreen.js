import { FlatList, StyleSheet, View } from "react-native";
import React from "react";
import { CATEGORIES } from "../data/dummy-data";
import CatogoryGridTile from "../components/CatogoryGridTile";

const CatagoriesScreen = ({ navigation }) => {
  return (
    <View>
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={(itemData) => (
          <CatogoryGridTile
            title={itemData.item.title}
            color={itemData.item.color}
            onPress={() =>
              navigation.navigate("MealsOverView", { catId: itemData.item.id })
            }
          />
        )}
        numColumns={2}
      />
    </View>
  );
};

export default CatagoriesScreen;

const styles = StyleSheet.create({});
