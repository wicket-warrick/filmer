import { useParams } from "react-router-dom";
import { useFilm } from "../hooks/useFilm";
import { FilmDetail } from "../components/Main/FilmDetail";
import { Loading } from "../components/Utilities/Loading";
import { errorFetchMessage } from "../components/Utilities/Error";
export const Film = () => {
  const { idFilm } = useParams();
  const { film, error, loading } = useFilm(idFilm);
  return (
    <>{loading ? <Loading /> : <FilmDetail film={film} error={error} errorMessage={errorFetchMessage} />}</>

  );
};
