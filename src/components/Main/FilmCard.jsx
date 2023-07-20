import propTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import {getDate} from '../../helpers/dates'
import { Button } from "../Utilities/Button";
export const FilmCard = ({ film }) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col mx-auto my-4 h-full w-80 transform font-placeFilm overflow-hidden rounded-lg bg-placeFilmGreen3  shadow-md duration-300 hover:scale-105 hover:shadow-lg">
      <img
        className=" w-full object-cover object-center"
        src={`https://image.tmdb.org/t/p/original/${film.poster_path}`}
        alt="Product Image"
      />
      <div className="p-4 grow flex flex-col justify-between gap-2 ">
        <h2 className=" text-lg  font-semibold text-white">
          {film.title}
        </h2>
        <Button handlerButton={() => navigate(`/film/${film.id}`)} text={'+info'}/>

      

        <div className="flex items-center">
          <p className="mr-2 text-lg font-normal text-gray-900 dark:text-white">
            Date release:
          </p>
          <p className="ml-auto text-base font-normal text-black-900">
            {getDate(film?.release_date)}
          </p>
        </div>
      </div>
    </div>
  );
};

FilmCard.propTypes = {
  film: propTypes.object.isRequired,
};
