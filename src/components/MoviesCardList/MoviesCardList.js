import React from "react";
import { Route } from "react-router-dom";
import MoviesCard from "../MoviesCard/MoviesCard";
import Preloader from "./../Preloader/Preloader";
import "./MoviesCardList.css";

export default function MoviesCardList(props) {
  const {
    movies,
    savedMovies,
    setSavedMovies,
    isLoading,
    isSearchPerformed,
    isSearchPerformedInSaved,
    searchResultMessage,
  } = props;

  const [shownMoviesNumber, setShownMoviesNumber] = React.useState(12);
  const shownMovies = movies.slice(0, shownMoviesNumber);
  const maxWidth = 1279;
  const minWidth = 767;

  React.useEffect(() => {
    function showMovies() {
      if (window.innerWidth > minWidth && window.innerWidth < maxWidth) {
        setShownMoviesNumber(8);
      } else if (window.innerWidth < minWidth) {
        setShownMoviesNumber(5);
      } else {
        setShownMoviesNumber(12);
      }
    }
    window.addEventListener("resize", showMovies);
    return () => {
      window.removeEventListener("resize", showMovies);
    };
  }, []);

  function LoadMoreMovies() {
    if (window.innerWidth > maxWidth) {
      setShownMoviesNumber(shownMoviesNumber + 3);
    } else if (window.innerWidth < maxWidth) {
      setShownMoviesNumber(shownMoviesNumber + 2);
    }
  }

  return (
    <>
      <Route path="/movies">
        {isLoading ? (
          <Preloader />
        ) : shownMovies.length === 0 ? (
          isSearchPerformed ? (
            <p className="movies-cardlist__result">{searchResultMessage}</p>
          ) : (
            ""
          )
        ) : (
          <>
            <ul className="movies-cardlist">
              {shownMovies.map((item) => (
                <li className="movies-cardlist__movie" key={item.movieId}>
                  <MoviesCard
                    movie={item}
                    savedMovies={savedMovies}
                    setSavedMovies={setSavedMovies}
                  />
                </li>
              ))}
            </ul>
            {movies.length > shownMovies.length ? (
              <div className="movies-cardlist__more-movies-container">
                <button
                  className="movies-cardlist__more-movies-button"
                  onClick={LoadMoreMovies}
                >
                  Ещё
                </button>
              </div>
            ) : (
              ""
            )}
          </>
        )}
      </Route>

      <Route path="/saved-movies">
        {isLoading ? (
          <Preloader />
        ) : savedMovies.length === 0 ? (
          isSearchPerformedInSaved ? (
            <p className="movies-cardlist__result">{searchResultMessage}</p>
          ) : (
            <p className="movies-cardlist__result">Нет сохраненных фильмов</p>
          )
        ) : (
          <>
            <ul className="movies-cardlist">
              {savedMovies.map((item) => (
                <li className="movies-cardlist__movie" key={item.movieId}>
                  <MoviesCard
                    movie={item}
                    savedMovies={savedMovies}
                    setSavedMovies={setSavedMovies}
                  />
                </li>
              ))}
            </ul>
            <div className="movies-cardlist-divider"></div>
          </>
        )}
      </Route>
    </>
  );
}
