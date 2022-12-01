import { createContext, useState } from "react";

export const FavoritesContext = createContext({
  ids: [],
  addFavrite: (id) => {},
  removeFavrite: (id) => {},
});

const FavoritesContextProvider = ({ children }) => {
  const [favMealIds, setfavMealIds] = useState([]);
  const addFavrite = (id) => {
    setfavMealIds((current) => [...current, id]);
  };
  const removeFavrite = (id) => {
    setfavMealIds((current) => current.filter((mealID) => mealID !== id));
  };

  const value = {
    ids: favMealIds,
    addFavrite: addFavrite,
    removeFavrite: removeFavrite,
  };
  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContextProvider;
