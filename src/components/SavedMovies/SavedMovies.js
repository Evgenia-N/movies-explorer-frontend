import React from "react";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import './SavedMovies.css';

export default function SavedMovies(props) {
  const {
    movies,
    savedMovies
  } = props;

  
  return (
    <div className="saved-movies">
      <SearchForm />
      <MoviesCardList 
        movies={movies}
        savedMovies={savedMovies}/>
    </div>
  )
}