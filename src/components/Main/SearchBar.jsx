import { useContext, useRef, useState } from "react";
import { FilmsFilterContext } from "../../context/filmsFilterContext";
export const SearchBar = () => {
  const { textFilter, setTextFilter } = useContext(FilmsFilterContext);
  const formRef = useRef();
  const [text, setText] = useState("");

  const searchFilms = (e) => {
    e.preventDefault();
    setTextFilter(text);
  };

  return (
    <form
      ref={formRef}
      onSubmit={searchFilms}
      className="  mx-auto text-gray-600 flex flex-row justify-center gap-10 mb-8 mt-4"
    >
      <fieldset>
        <input
          className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-gray-300"
          type="text"
          id="film_name"
          autoComplete="off"
          onChange={(e) => {
            setText(e.target.value);
          }}
          autoFocus
          placeholder="Search your film..."
          defaultValue={textFilter}
        />
      </fieldset>
      <button
        type="sumbit"
        className="border-2 border-gray-300  h-10 bg-placeFilmGreen3 rounded-lg flex flex-col justify-center "
      >
        <img
          className="h-10 w-10"
          src="/icons/search.png"
          alt="search"
          title="search"
        />
      </button>
    </form>
  );
};
