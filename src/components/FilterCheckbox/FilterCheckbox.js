import React from "react";
import { Route } from "react-router-dom";
import "./FilterCheckbox.css";

export default function FilterCheckbox(props) {
  const {
    movies,
    setMovies,
    savedMovies,
    setSavedMovies,
    isShortMoviesCheckboxChecked,
    setIsShortMoviesCheckboxChecked,
    filterByDuration,
  } = props;

  const [
    isShortSavedMoviesCheckboxChecked,
    setIsShortSavedMoviesCheckboxChecked,
  ] = React.useState(false);

  function filterMoviesByDuration() {
    if (!isShortMoviesCheckboxChecked) {
      const filteredMovies = filterByDuration(movies);
      setMovies(filteredMovies);
      setIsShortMoviesCheckboxChecked(true);
      localStorage.setItem(
        "checkboxState",
        JSON.stringify(!isShortMoviesCheckboxChecked)
      );
      localStorage.setItem(
        "storagedShortMovies",
        JSON.stringify(filteredMovies)
      );
    } else {
      localStorage.removeItem("storagedShortMovies");
      setMovies(JSON.parse(localStorage.getItem("storagedMovies")));
      setIsShortMoviesCheckboxChecked(false);
      localStorage.setItem(
        "checkboxState",
        JSON.stringify(!isShortMoviesCheckboxChecked)
      );
    }
  }

  function filterSavedMoviesByDuration() {
    if (isShortSavedMoviesCheckboxChecked === false) {
      localStorage.setItem(
        "storagedSavedShortMovies",
        JSON.stringify(savedMovies)
      );
      const filteredMovies = filterByDuration(savedMovies);
      setSavedMovies(filteredMovies);
      setIsShortSavedMoviesCheckboxChecked(true);
    } else {
      setSavedMovies(
        JSON.parse(localStorage.getItem("storagedSavedShortMovies"))
      );
      setIsShortSavedMoviesCheckboxChecked(false);
      localStorage.removeItem("storagedSavedShortMovies");
    }
  }

  React.useEffect(() => {
    if (
      isShortSavedMoviesCheckboxChecked === false &&
      localStorage.getItem("storagedSavedShortMovies")
    ) {
      setSavedMovies(
        JSON.parse(localStorage.getItem("storagedSavedShortMovies"))
      );
      localStorage.removeItem("storagedSavedShortMovies");
    }
  }, [isShortSavedMoviesCheckboxChecked, setSavedMovies]);

  return (
    <>
      <Route path="/movies">
        <input
          type="checkbox"
          className="movies-checkbox"
          id="checkbox"
          defaultChecked={isShortMoviesCheckboxChecked}
          onChange={filterMoviesByDuration}
        />
        <label htmlFor="checkbox" className="movies-checkbox__text">
          {props.name}
        </label>
      </Route>
      <Route path="/saved-movies">
        <input
          type="checkbox"
          className="movies-checkbox"
          id="checkbox"
          defaultChecked={isShortSavedMoviesCheckboxChecked}
          onChange={filterSavedMoviesByDuration}
        />
        <label htmlFor="checkbox" className="movies-checkbox__text">
          {props.name}
        </label>
      </Route>
    </>
  );
}
