export const getFilms = async (title) => {
  const response = await fetch(
    // eslint-disable-next-line no-undef
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${title}`,
  );
  const json = await response.json();
  if (!response.ok) throw new Error(json.message);
  return json.results;
};

export const getFilmById = async (idFilm) => {
  const response = await fetch(
    // eslint-disable-next-line no-undef
    `https://api.themoviedb.org/3/movie/${idFilm}?api_key=${process.env.REACT_APP_API_KEY}`,
  );
  const json = await response.json();
  if (!response.ok) throw new Error(json.message);
  return json;
};
