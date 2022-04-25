import React from "react";
import './MoviesCard.css'
import { Route } from "react-router-dom";

export default function MoviesCard(props) {
  const [isSaved, setIsSaved] = React.useState(false);

  function onSaveMovie() {
    setIsSaved(true);
  }

  function onDeleteMovie() {
    setIsSaved(false);
  }

  return (
  <>
  <a href={props.movie.trailerLink} className='movies-card__video' target="_blank">
    <img src={props.movie.image} alt={props.movie.nameRU} className="movies-card__pic" />
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