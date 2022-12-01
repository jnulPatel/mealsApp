import { configureStore } from "@reduxjs/toolkit";
import favoriteReducer from "./slices/favoritesSlice";
export const store = configureStore({
  reducer: { favoriteMeals: favoriteReducer },
});
