import { useContext, useEffect, useState } from "react";
import { getFilms } from "../services/films";
import { FilmsFilterContext } from "../context/filmsFilterContext";
export const useFilms = () => {
  const [films, setFilms] = useState([]);
  const [error, setError] = useState("");
  const { textFilter } = useContext(FilmsFilterContext);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadFilms = async () => {
      if (textFilter) {
        try {
          setLoading(true);
          const filmsData = await getFilms(textFilter);
          setFilms(filmsData);
        } catch (error) {
          setError(error);
        } finally {
          setLoading(false);
        }
      }
    };
    loadFilms();
  }, [textFilter]);
  return { films, error, loading,textFilter };
};
