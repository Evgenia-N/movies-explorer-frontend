import React from "react";
import { Route } from "react-router-dom";
import { movies } from "../../utils/movies";
import MoviesCard from "../MoviesCard/MoviesCard";
import './MoviesCardList.css'

export default function MoviesCardList() {
  const [shownMoviesNumber, setShownMoviesNumber] = React.useState(12);
  const shownMovies = movies.slice(0, shownMoviesNumber);

  const [shownSavedMoviesNumber, setShownSavedMoviesNumber] = React.useState(3);
  const savedMovies = movies.slice(0, shownSavedMoviesNumber);

  React.useEffect(() => {
    function showMovies() {
      if (window.innerWidth > 767 && window.innerWidth < 1279 )  {
        setShownMoviesNumber(8)
      }
      else if (window.innerWidth < 767)  {
        setShownMoviesNumber(5)
      }
      else {
        setShownMoviesNumber(12)
      }
    }
    window.addEventListener('resize', showMovies);
    return () => {
      window.removeEventListener('resize', showMovies);
    }
  }, []);

  React.useEffect(() => {
    function showSavedMovies() {
      if (window.innerWidth < 767)  {
        setShownSavedMoviesNumber(2)
      }
      else {
        setShownSavedMoviesNumber(3)
      }
    }
    window.addEventListener('resize', showSavedMovies);
    return () => {
      window.removeEventListener('resize', showSavedMovies);
    }
  }, []);

  return (
    <>
      <Route path="/movies">
        <ul className="movies-cardlist">
          {shownMovies.map((item) => (
            <li className='movies-cardlist__movie' key={item.id}>
              <MoviesCard movie={item} />
            </li>))
          }
        </ul>
        <div className="movies-cardlist__more-movies-container">
          <button className="movies-cardlist__more-movies-button">Ещё</button>
        </div>
      </Route>

      <Route path="/saved-movies">
        <ul className="movies-cardlist">
          {savedMovies.map((item) => (
            <li className='movies-cardlist__movie' key={item.id}>
              <MoviesCard movie={item} />
            </li>))
          }
        </ul>
        <div className="movies-cardlist-divider"></div>
      </Route>
    </>
  );
}