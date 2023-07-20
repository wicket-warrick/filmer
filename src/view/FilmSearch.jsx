import { FilmsList } from "../components/Main/FilmsList";
import { SearchBar } from "../components/Main/SearchBar";
import { errorFetchMessage } from "../components/Utilities/Error";

import { Loading } from "../components/Utilities/Loading";
import { warningNotResultsMessage } from "../components/Utilities/Warning";

import { useFilms } from "../hooks/useFilms";

export const FilmSearch = () => {
  const { films, error, loading, textFilter } = useFilms("");
  return (
    <>
      <SearchBar />
      {loading ? (
        <Loading />
      ) : textFilter ? (
        <FilmsList
          films={films}
          error={error}
          errorMessage={errorFetchMessage}
          warningMessage={warningNotResultsMessage}
        />
      ) : (
        <></>
      )}
    </>
  );
};
