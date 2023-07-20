import { IconNavLink } from "./IconNavLink";

export const Header = () => {
  return (
    <header className="flex sticky top-0 z-50 mx-auto  border-b-8 bg-placeFilmGreen3">
      <nav className="flex justify-between  w-screen px-5 xl:px-12 py-2  items-center">
        <div className=" gap-x-3  flex">
          <a
            href="https:\\www.linkedin.com/in/hugosuarezdevp"
            className="h-9 w-9 sm:hidden"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/icons/web.png" alt="PlaceIn" title="PlaceIn" />
          </a>

          <a href="https:\\www.linkedin.com/in/hugosuarezdevp" target="_blank" rel="noreferrer">
            <h1 className="hidden sm:block text-3xl font-placeFilm font-regular text-white">
              PlaceFilm
            </h1>
          </a>
        </div>

        <div className=" flex items-center space-x-5 ">
          <IconNavLink
            path="/"
            src="/icons/home.png"
            alt="inicio-búsqueda"
            title="inicio-búsqueda"
          />

          <IconNavLink
            path="/myfilms"
            src="/icons/favorite.png"
            alt="Favoritos"
            title="Películas favoritas"
          />
        </div>
      </nav>
    </header>
  );
};
