import { FilmsList } from "../components/Main/FilmsList";
import { warningNotFavResultsMessae } from "../components/Utilities/Warning";
import { useFav } from "../hooks/useFav";

export const MyFilms = () => {
  const { films } = useFav();
  return (
    <>
      <FilmsList films={films} warningMessage={warningNotFavResultsMessae} />
    </>
  );
};
