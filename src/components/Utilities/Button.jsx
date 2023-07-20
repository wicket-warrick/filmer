import propTypes from "prop-types";

export const Button = ({ handlerButton, text, state }) => {
  return (
    <button
      onClick={handlerButton}
      className="py-2 px-4 bg-transparent text-white self-center font-normal border border-white rounded-lg hover:bg-white hover:text-placeFilmGreen3 hover:border-transparent  hover:font-semibold transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0"
    >
      {" "}
      <p>{text || state}</p>
    </button>
  );
};

Button.propTypes = {
  handlerButton: propTypes.func.isRequired,
  text: propTypes.string,
  state: propTypes.string,
};
