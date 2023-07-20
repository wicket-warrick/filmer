import propTypes from "prop-types";
import { FilmCard } from "./FilmCard";
import { Error } from "../Utilities/Error";
import { Warning } from "../Utilities/Warning";
export const FilmsList = ({ films, error, errorMessage, warningMessage }) => {
  return (
    <>
      {error ? (
        <Error message={errorMessage} />
      ) : films?.length ? (
        <ul className="flex flex-row flex-wrap gap-5 mx-12 mb-8 justify-center  ">
          {films?.map((film) => {
            return (
              <li key={film.id} className="mb-5 mx-5  ">
                <FilmCard film={film} />
              </li>
            );
          })}
        </ul>
      ) : (
        <Warning message={warningMessage} />
      )}
    </>
  );
};

FilmsList.propTypes = {
  films: propTypes.array.isRequired,
  error: propTypes.string,
  errorMessage: propTypes.string,
  warningMessage: propTypes.string,
};
