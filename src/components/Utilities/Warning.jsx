import propTypes from "prop-types";

export const Warning = ({ message }) => {
  return (
    <div
      className="flex flex-row mx-auto justify-center bg-yellow-100 w-8/12 rounded-lg p-4 mb-4 mt-5 text-sm text-yellow-700 font-placeFilm md:w-6/12 xl:w-5/12"
      role="alert"
    >
      <svg
        className="w-5 h-5 inline mr-3"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
          clipRule="evenodd"
        ></path>
      </svg>
      <span className="font-medium">{message}</span>
    </div>
  );
};

export const warningNotResultsMessage = " There are no results to show";
export const warningNotFavResultsMessae = "You have not saved any movies";

Warning.propTypes = {
  message: propTypes.string.isRequired,
};
