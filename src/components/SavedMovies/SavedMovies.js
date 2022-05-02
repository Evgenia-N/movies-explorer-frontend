import React from "react";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import "./SavedMovies.css";

export default function SavedMovies(props) {
  const {
    movies,
    setMovies,
    savedMovies,
    setSavedMovies,
    handleSubmitSearchSavedForm,
    isLoading,
    isSearchPerformedInSaved,
    searchResultMessage,
    isShortMoviesCheckboxChecked,
    setIsShortMoviesCheckboxChecked,
    setIsSearchPerformedInSaved,
    filterByDuration,
  } = props;

  return (
    <div className="saved-movies">
      <SearchForm
        handleSubmitSearch={handleSubmitSearchSavedForm}
        isShortMoviesCheckboxChecked={isShortMoviesCheckboxChecked}
        setIsShortMoviesCheckboxChecked={setIsShortMoviesCheckboxChecked}
        setIsPerformed={setIsSearchPerformedInSaved}
        filterByDuration={filterByDuration}
        movies={movies}
        setMovies={setMovies}
        savedMovies={savedMovies}
        setSavedMovies={setSavedMovies}
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
