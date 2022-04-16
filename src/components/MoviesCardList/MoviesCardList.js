import React from "react";
import { Route } from "react-router-dom";
import MoviesCard from "../MoviesCard/MoviesCard";
import './MoviesCardList.css'

export default function MoviesCardList() {
  return (
    <>
      <Route path="/movies">
        <ul className="movies-cardlist">
          <li className="movies-cardlist__movie">
            <MoviesCard />
          </li>
          <li className="movies-cardlist__movie">
            <MoviesCard />
          </li>
          <li className="movies-cardlist__movie">
            <MoviesCard />
          </li>
          <li className="movies-cardlist__movie">
            <MoviesCard />
          </li>
          <li className="movies-cardlist__movie">
            <MoviesCard />
          </li>
          <li className="movies-cardlist__movie">
            <MoviesCard />
          </li>
          <li className="movies-cardlist__movie">
            <MoviesCard />
          </li>
          <li className="movies-cardlist__movie">
            <MoviesCard />
          </li>
          <li className="movies-cardlist__movie">
            <MoviesCard />
          </li>
          <li className="movies-cardlist__movie">
            <MoviesCard />
          </li>
          <li className="movies-cardlist__movie">
            <MoviesCard />
          </li>
          <li className="movies-cardlist__movie">
            <MoviesCard />
          </li>
        </ul>
      </Route>
      <ul className="movies-cardlist">
        <li className="movies-cardlist__movie">
          <MoviesCard />
        </li>
        <li className="movies-cardlist__movie">
          <MoviesCard />
        </li>
        <li className="movies-cardlist__movie">
          <MoviesCard />
        </li>
      </ul>
      <Route path="/saved-movies"></Route>
      <div className="movies-cardlist__more-movies-container">
        <button className="movies-cardlist__more-movies-button">Ещё</button>
      </div>
    </>
  );
}