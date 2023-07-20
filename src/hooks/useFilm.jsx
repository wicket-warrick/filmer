import { useEffect, useState } from "react";
import { getFilmById } from "../services/films";
import { useNavigate } from "react-router-dom";

export const useFilm = (idFilm) => {
  const [film, setFilm] = useState({});
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadFilm = async () => {
      try {
        setLoading(true);
        const filmData = await getFilmById(idFilm);
        setFilm(filmData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    loadFilm();
  }, [idFilm]);

  return { film, error, loading };
};
