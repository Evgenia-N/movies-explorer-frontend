import React from "react";
import './MoviesCard.css'
import pic from '../../images/pic1.svg'
import { Route } from "react-router-dom";

export default function MoviesCard() {
  const [isSaved, setIsSaved] = React.useState(false);

  function onSaveMovie() {
    setIsSaved(true);
  }

  function onDeleteMovie() {
    setIsSaved(false);
  }

  return (
  <>
  <img src={pic} alt="Скриншот из фильма" className="movies-card__pic" />
  <Route path="/movies">
    <button onClick={onSaveMovie} className={ isSaved ? "movies-card__saved-button" : "movies-card__save-button"}></button> 
  </Route>
  <Route path="/saved-movies">
    <button onClick={onDeleteMovie} className="movies-card__delete-button"></button>
  </Route>
  <div className="movies-card__container">
    <p className="movies-card__title">33 слова о дизайне</p>
    <div className="movies-card__duration-background"><p className="movies-card__duration">1ч 17м</p></div>
  </div>
  </>
  )
}