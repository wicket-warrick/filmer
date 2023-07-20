import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Main/Header";
import { FilmSearch } from "./view/FilmSearch";
import { MyFilms } from "./view/MyFilms";
import { Film } from "./view/Film";
import { FilmsFilterProvider } from "./context/filmsFilterContext";
import { FavProvider } from "./context/favContext";
import { NotFound } from "./view/NotFound";

function App() {
  return (
    <FavProvider>
      <FilmsFilterProvider>
        <div className="App min-h-screen flex flex-col  ">
          <Header />
          <main className="grow flex flex-col ">
            <Routes>
              <Route path="/" element={<FilmSearch />}></Route>
              <Route path="/film/:idFilm" element={<Film />}></Route>
              <Route path="/myfilms" element={<MyFilms />}></Route>
              <Route path="*" element={<NotFound />}></Route>
            </Routes>
          </main>
        </div>
      </FilmsFilterProvider>
    </FavProvider>
  );
}

export default App;
