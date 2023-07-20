import { useNavigate } from "react-router-dom";

export const NotFound = () => {
  const navigate = useNavigate();
  return (
    <section className="h-full grow flex flex-col  font-placeFilm justify-center items-center  ">
      <h1 className="text-9xl font-extrabold text-placeFilmGreen3  ">404</h1>
      <div className="bg-white px-2 text-sm rounded rotate-12 absolute ">
        Page Not Found
      </div>
      <button
        className="mt-5 border border-placeFilmGreen3 rounded-lg hover:bg-placeFilmGreen3  px-8 py-3 text-sm font-medium text-placeFilmGreen3 hover:text-white transform duration-300 hover:scale-105"
        onClick={() => navigate("/")}
      >
        Go Home
      </button>
    </section>
  );
};
