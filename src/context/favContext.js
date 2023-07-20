import { createContext, useReducer } from "react";
import favReducer, { initFav } from "./favReducer";
import propTypes from "prop-types";

export const FavContext = createContext(initFav);

export const FavProvider = ({ children }) => {
  const [state, dispatch] = useReducer(favReducer, initFav);

  const addToFav = (film) => {
    const addToFav = state.films.concat(film);
    dispatch({
      type: "ADD_TO_FAV",
      payload: { films: addToFav },
    });
  };

  const removeFromFav = (film) => {
    const deleteToFav = state.films.filter(
      (currentFilm) => currentFilm.id !== film.id,
    );

    dispatch({
      type: "REMOVE_FROM_FAV",
      payload: {
        films: deleteToFav,
      },
    });
  };

  const value = {
    films: state.films,
    addToFav,
    removeFromFav,
  };
  return <FavContext.Provider value={value}>{children}</FavContext.Provider>;
};

FavProvider.propTypes = {
  children: propTypes.object,
};
