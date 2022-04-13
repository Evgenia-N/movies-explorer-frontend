import React from "react";
import './MoviesCard.css'
import pic from '../../images/pic1.svg'

export default function MoviesCard() {
  return (
  <>
  <img src={pic} alt="Скриншот из фильма" className="movies-card__pic" />
  <div className="movies-card__container">
    <p className="movies-card__title">33 слова о дизайне</p>
    <div className="movies-card__duration-background"><p className="movies-card__duration">1ч 17м</p></div>
  </div>
  </>
  )
}