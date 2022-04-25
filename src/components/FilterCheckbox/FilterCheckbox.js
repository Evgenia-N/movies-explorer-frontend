import React from "react";
import './FilterCheckbox.css';

export default function FilterCheckbox(props) {
  const {
    isShortMoviesCheckboxChecked,
    setIsShortMoviesCheckboxChecked
  } = props;

  function filterMoviesByDuration() {
    if (!isShortMoviesCheckboxChecked) {
      setIsShortMoviesCheckboxChecked(true);
      localStorage.setItem(
        'checkboxState',
        JSON.stringify(!isShortMoviesCheckboxChecked)
      );
    } else {
      setIsShortMoviesCheckboxChecked(false);
      localStorage.removeItem(
        'checkboxState'
      );
    }
  }

  return (
    <>
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
    </>
  );
}
