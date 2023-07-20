  /**
   * *SET REVIEW CHANGES
   */
  const saveReview = (e) => {
    setTextReview(e.target.value);
  };
    /**
   * *SAVE FILM WHEN TEXT-REVIEW IS UPDATED/CHANGED
   */


  useEffect(() => {
    const filmIsFav = films.find((filmFav) => filmFav?.id === film?.id);
    const indexFilmFav = films?.findIndex((filmFav) => filmFav?.id === film?.id);

    if (filmIsFav) {
      setIsFav(true);
    } else {
      setIsFav(false);
    }
    console.log(filmIsFav,indexFilmFav)

    if (isFav===false && textReview) {
      film.review = textReview;

      addToFav(film);
    }
    if (isFav===true && textReview) {
      films[indexFilmFav].review = textReview;
      console.log(film)
    }
  }, [textReview]);
  /**
   * *GET TEXT-REVIEW FROM SAVED FILM
   */

  useEffect(() => {
    const indexFilmFav = films?.findIndex(
      (filmFav) => filmFav?.id === film?.id,
    );
    if (indexFilmFav) {
      setTextReview(films[indexFilmFav]?.review);
    }
    console.log(film.review)
  }, [film]);



  /**
   * *ADD TO FAVORITES FILMS WITH BUTTON
   */

  useEffect(() => {
    const filmIsFav = films.find((filmFav) => filmFav.id === film.id);
    if (filmIsFav) {
      setIsFav(true);
    } else {
      setIsFav(false);
    }
  }, [film,films]);

  const addToFavOnClick = () => {
    if (isFav) {
      removeFromFav(film);
    } else {
      addToFav(film);
    }
  };