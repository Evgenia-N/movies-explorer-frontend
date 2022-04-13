import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import './MoviesCardList.css'

export default function MoviesCardList() {
  return (
    <>
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
      <div className="movies-cardlist__more-movies-container">
        <button className="movies-cardlist__more-movies-button">Ещё</button>
      </div>
    </>
  );
}