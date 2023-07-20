export const initFav = {
  films: [],
};

const favReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD_TO_FAV":
      console.log(payload.films)
      return {
        ...state,
        films: payload.films,
      };

    case "REMOVE_FROM_FAV":
      return {
        ...state,
        films: payload.films,
      };
  }
};

export default favReducer;
