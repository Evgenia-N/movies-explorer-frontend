import React from "react";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import "./SavedMovies.css";

export default function SavedMovies(props) {
  const {
    movies,
    savedMovies,
    setSavedMovies,
    handleSubmitSearchSavedForm,
    isLoading,
    isSearchPerformedInSaved,
    searchResultMessage,
    isShortMoviesCheckboxChecked,
    setIsShortMoviesCheckboxChecked,
    setIsSearchPerformedInSaved,
  } = props;

  return (
    <div className="saved-movies">
      <SearchForm
        handleSubmitSearch={handleSubmitSearchSavedForm}
        isShortMoviesCheckboxChecked={isShortMoviesCheckboxChecked}
        setIsShortMoviesCheckboxChecked={setIsShortMoviesCheckboxChecked}
        setIsPerformed={setIsSearchPerformedInSaved}
      />
      <MoviesCardList
        movies={movies}
        savedMovies={savedMovies}
        setSavedMovies={setSavedMovies}
        isLoading={isLoading}
        isSearchPerformedInSaved={isSearchPerformedInSaved}
        searchResultMessage={searchResultMessage}
      />
    </div>
  );
}
