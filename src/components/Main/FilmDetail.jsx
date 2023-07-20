import propTypes from "prop-types";
import { useFav } from "../../hooks/useFav";
import { useEffect, useState } from "react";
import { Error } from "../Utilities/Error";
import { FilmInfo } from "./FilmInfo";
export const FilmDetail = ({ film, error, errorMessage }) => {
  const { films, addToFav, removeFromFav } = useFav();
  const [isFav, setIsFav] = useState(false);
  const [textReview, setTextReview] = useState("");
  const [rating, setRating] = useState(0);
  /**
   * * CHECK IF FILM IS FAV
   */

  useEffect(() => {
    const filmIsFav = films.find((filmFav) => filmFav.id === film.id);
    if (filmIsFav) {
      setIsFav(true);
    } else {
      setIsFav(false);
    }
  }, [film, films]);

  /**
   * *SET TEXT-REVIEW CHANGES IN COMPONENT STATE
   */
  const saveReview = (e) => {
    setTextReview(e.target.value);
  };

  /**
   * *SAVE FILM WHEN TEXT-REVIEW or RATE IS UPDATED
   */

  useEffect(() => {
    const indexFilmFav = films.findIndex((filmFav) => filmFav.id === film.id);

    if (!isFav && (textReview !== "" || rating !== 0)) {
      if (textReview) film.review = textReview;
      if (rating) film.rate = rating;

      addToFav(film);
    }
    if (isFav) {
      if (textReview) films[indexFilmFav].review = textReview;
      if (rating) films[indexFilmFav].rate = rating;
    }
  }, [textReview, rating]);
  /**
   * *GET TEXT-REVIEW and RATE FROM SAVED FILM
   */

  useEffect(() => {
    const indexFilmFav = films.findIndex((filmFav) => filmFav.id === film.id);
    if (indexFilmFav >= 0) {
      setTextReview(films[indexFilmFav].review);
      setRating(films[indexFilmFav].rate);
    }
  }, [film]);

  /**
   * *ADD TO FAVS WITH BUTTON
   */

  const addToFavOnClick = () => {
    if (isFav) {
      removeFromFav(film);
    } else {
      addToFav(film);
    }
  };

  return (
    <>
      {error ? (
        <Error message={errorMessage} />
      ) : (
        // <section className="bg-placeFilmGreen3 mx-10">
        //   <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        //     <div className="mr-auto  lg:col-span-7">
        //       <h1 className="max-w-2xl mb-4 text-4xl font-extrabold font-placeFilm  md:text-5xl xl:text-6xl text-white">
        //         {film.title}
        //       </h1>
        //       <p className="max-w-2xl mb-6 font-light font-placeFilm text-white lg:mb-8 md:text-lg lg:text-xl ">
        //         {film.overview}
        //       </p>
        //       <p className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white  font-placeFilm">
        //         {getYear(film?.release_date)}
        //       </p>
        //       <div className="inline-flex items-center justify-center px-3 py-3 mr-3 text-base font-medium text-center text-white font-placeFilm">
        //         <p>Nota: {film.vote_average?.toFixed(1)}</p>
        //       </div>
        //       <Button
        //         handlerButton={addToFavOnClick}
        //         state={isFav ? "Remove" : "Add"}
        //       ></Button>

        //       <div className="max-w-2xl mx-auto mt-4">
        //         <label
        //           htmlFor="message"
        //           className="block mb-2 text-regular font-medium text-white "
        //         >
        //           Tu opinión:
        //         </label>
        //         <textarea
        //           type="text"
        //           id="review"
        //           maxLength={300}
        //           rows="5"
        //           value={textReview}
        //           onChange={saveReview}
        //           className="block p-2.5 w-full text-lg text-placeFilmGreen3 font-normal bg-whitte rounded-lg     resize-none  focus:outline-none"
        //         ></textarea>
        //       </div>
        //     </div>
        //     <div className="hidden lg:col-span-4 lg:col-start-9 lg:flex rounded-lg lg:full ">
        //       <img
        //         src={`https://image.tmdb.org/t/p/original/${film.poster_path}`}
        //         alt="Poster"
        //         className="rounded-lg "
        //       />
        //     </div>
        //   </div>
        // </section>
        <FilmInfo
          film={film}
          addToFavOnClick={addToFavOnClick}
          stateFav={isFav}
          stateText={textReview}
          stateRate={rating}
          saveText={saveReview}
          saveRate={setRating}
        />
      )}
    </>
  );
};

FilmDetail.propTypes = {
  film: propTypes.object.isRequired,
  error: propTypes.string,
  errorMessage: propTypes.string,
};
