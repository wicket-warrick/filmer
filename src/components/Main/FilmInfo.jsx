import propTypes from "prop-types";
import { getYear } from "../../helpers/dates";
import { Button } from "../Utilities/Button";
import { RateStars } from "./RateStars";
export const FilmInfo = ({
  film,
  addToFavOnClick,
  stateFav,
  saveText,
  stateText,
  stateRate,
  saveRate,
}) => {
  return (
    <section className="bg-placeFilmGreen3 mx-10 mt-4">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto  lg:col-span-7 ">
          <h1 className="max-w-2xl mb-4 text-4xl  font-extrabold font-placeFilm  md:text-5xl xl:text-6xl text-white">
            {film.title}
          </h1>
          <p className="max-w-2xl mb-6 font-light font-placeFilm text-white lg:mb-8 md:text-lg lg:text-xl ">
            {film.overview}
          </p>
          <section className="flex flex-row justify-center flex-wrap sm:justify-start">
            <p className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white  font-placeFilm">
              {getYear(film?.release_date)}
            </p>
            <div className="inline-flex items-center justify-center px-3 py-3 mr-3 text-base font-medium text-center text-white font-placeFilm">
              <p>Nota: {film.vote_average?.toFixed(1)}</p>
            </div>
            <Button
              handlerButton={addToFavOnClick}
              state={stateFav ? "Remove" : "Add"}
            ></Button>
            <RateStars rating={stateRate} setRating={saveRate} />
          </section>

          <div className="max-w-2xl mx-auto mt-4">
            <label
              htmlFor="message"
              className="block mb-2 text-regular font-medium text-white "
            >
              Tu opinión:
            </label>
            <textarea
              type="text"
              id="review"
              maxLength={300}
              rows="5"
              value={stateText}
              onChange={saveText}
              className="block p-2.5 w-full text-lg text-placeFilmGreen3 font-normal bg-whitte rounded-lg     resize-none  focus:outline-none"
            ></textarea>
          </div>
        </div>
        <div className="hidden lg:col-span-4 lg:col-start-9 lg:flex rounded-lg lg:full ">
          <img
            src={`https://image.tmdb.org/t/p/original/${film.poster_path}`}
            alt="Poster"
            className="rounded-lg "
          />
        </div>
      </div>
    </section>
  );
};

FilmInfo.propTypes = {
  film: propTypes.object.isRequired,
  addToFavOnClick: propTypes.func.isRequired,
  stateText: propTypes.string,
  saveText: propTypes.func.isRequired,
  stateFav: propTypes.bool.isRequired,
  stateRate: propTypes.number,
  saveRate: propTypes.func.isRequired,
};
