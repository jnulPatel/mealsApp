import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
  name: "favorites",
  initialState: {
    ids: [],
  },
  reducers: {
    addFavorite: (state, { payload }) => {
      state.ids.push(payload.id);
    },
    removeFavorite: (state, { payload }) => {
      state.ids.splice(state.ids.indexOf(payload.id), 1);
    },
  },
});

export const { addFavorite, removeFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;
