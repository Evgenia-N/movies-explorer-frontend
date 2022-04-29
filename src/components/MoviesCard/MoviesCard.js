import React from "react";
import './MoviesCard.css'
import { Route } from "react-router-dom";
import MainApi from "../../utils/MainApi";

export default function MoviesCard(props) {
  const {
  movie,
  savedMovies
  } = props;
  const [ isSaved, setIsSaved ] = React.useState(savedMovies.find((item) => item.nameRU === movie.nameRU))

  const savedMovie = savedMovies.find((item) => item.nameRU === movie.nameRU);

  function onSaveMovie() {
    if (isSaved) {
      MainApi.deleteMovie(savedMovie.movieId)
      setIsSaved(false)
    } else {
      MainApi.saveMovie(movie)
      setIsSaved(true)
   }
  }

  function onDeleteMovie() {
    MainApi.deleteMovie(savedMovie.movieId)
  }

  return (
  <>
  <a href={movie.trailerLink} className='movies-card__video' target="_blank">
    <img src={movie.image} alt={movie.nameRU} className="movies-card__pic" />
  </a>
  <Route path="/movies">
    <button onClick={onSaveMovie} className={ isSaved ? "movies-card__saved-button" : "movies-card__save-button"}></button> 
  </Route>
  <Route path="/saved-movies">
    <button onClick={onDeleteMovie} className="movies-card__delete-button"></button>
  </Route>
  <div className="movies-card__container">
    <p className="movies-card__title">{props.movie.nameRU}</p>
    <div className="movies-card__duration-background"><p className="movies-card__duration">{props.movie.duration} мин</p></div>
  </div>
  </>
  )
}