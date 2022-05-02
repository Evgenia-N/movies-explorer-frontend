import React from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import "./SearchForm.css";

export default function SearchForm(props) {
  const {
    movies,
    setMovies,
    savedMovies,
    setSavedMovies,
    initialValue,
    handleSubmitSearch,
    isShortMoviesCheckboxChecked,
    setIsShortMoviesCheckboxChecked,
    setIsPerformed,
    filterByDuration,
  } = props;

  const [request, setRequest] = React.useState(initialValue || "");
  const [isValid, setIsValid] = React.useState(false);

  function handleChange(evt) {
    setRequest(evt.target.value);
  }

  function submitForm(evt) {
    evt.preventDefault();
    handleSubmitSearch(request);
    setIsPerformed(true);
  }

  React.useEffect(() => {
    if (request.length > 0) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [request.length]);

  return (
    <>
      <form className="search-form">
        <div className="search-form__container">
          <input
            className="search-form__input"
            placeholder="Фильм"
            type="text"
            onChange={handleChange}
            defaultValue={initialValue}
            required
          />
          <button
            className={`search-form__submit-button ${
              !isValid && "search-form__submit-button_disabled"
            }`}
            type="submit"
            onClick={submitForm}
            disabled={!isValid}
          />
        </div>
        <div className="search-form__checkbox-container">
          <FilterCheckbox
            isShortMoviesCheckboxChecked={isShortMoviesCheckboxChecked}
            setIsShortMoviesCheckboxChecked={setIsShortMoviesCheckboxChecked}
            filterByDuration={filterByDuration}
            movies={movies}
            setMovies={setMovies}
            savedMovies={savedMovies}
            setSavedMovies={setSavedMovies}
            name={"Короткометражки"}
          />
        </div>
      </form>
    </>
  );
}
