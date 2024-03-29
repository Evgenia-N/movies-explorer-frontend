import React from "react";
import "./MoviesCard.css";
import { Route } from "react-router-dom";
import MainApi from "../../utils/MainApi";

export default function MoviesCard(props) {
  const { movie, savedMovies, setSavedMovies } = props;

  const [isSaved, setIsSaved] = React.useState(
    savedMovies.find((item) => item.nameRU === movie.nameRU)
  );
  const savedMovie = savedMovies.find((item) => item.nameRU === movie.nameRU);

  function updateSavedMovies() {
    const currentUser = localStorage.getItem("token");
    MainApi.getMovies()
      .then((res) => {
        let arrMovies = [];
        let index = 0;
        res.forEach((item) => {
          if (item.owner === currentUser) {
            arrMovies[index] = {
              nameRU: item.nameRU,
              image: item.image,
              trailerLink: item.trailerLink,
              country: item.country,
              duration: item.duration,
              movieId: item._id,
              thumbnail: item.image,
              director: item.director,
              year: item.year,
              description: item.description,
              nameEN: item.nameEN,
            };
            index++;
          }
          setSavedMovies(arrMovies);
        });
      })
      .catch((err) => console.log(err));
  }

  function onSaveMovie() {
    const savedMovie = savedMovies.find((item) => item.nameRU === movie.nameRU);
    if (isSaved) {
      MainApi.deleteMovie(savedMovie.movieId);
      setIsSaved(false);
      const newSavedMovies = savedMovies.filter(
        (item) => item.nameRU !== savedMovie.nameRU
      );
      setSavedMovies(newSavedMovies);
    } else {
      MainApi.saveMovie(movie);
      setIsSaved(true);
      updateSavedMovies();
    }
  }

  function onDeleteMovie() {
    const newSavedMovies = savedMovies.filter(
      (item) => item.nameRU !== savedMovie.nameRU
    );
    MainApi.deleteMovie(savedMovie.movieId);
    setSavedMovies(newSavedMovies);
  }

  return (
    <>
      <a
        href={movie.trailerLink}
        className="movies-card__video"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={movie.image}
          alt={movie.nameRU}
          className="movies-card__pic"
        />
      </a>
      <Route path="/movies">
        <button
          onClick={onSaveMovie}
          className={
            isSaved ? "movies-card__saved-button" : "movies-card__save-button"
          }
        ></button>
      </Route>
      <Route path="/saved-movies">
        <button
          onClick={onDeleteMovie}
          className="movies-card__delete-button"
        ></button>
      </Route>
      <div className="movies-card__container">
        <p className="movies-card__title">{movie.nameRU}</p>
        <div className="movies-card__duration-background">
          {movie.duration > 59 ? (
            <p className="movies-card__duration">
              {Math.floor(movie.duration / 60)} ч {movie.duration % 60} м
            </p>
          ) : (
            <p className="movies-card__duration">{movie.duration % 60} мин</p>
          )}
        </div>
      </div>
    </>
  );
}
