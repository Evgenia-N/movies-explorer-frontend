import React from "react";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import "./Movies.css";

export default function Movies(props) {
  const {
    movies,
    setMovies,
    savedMovies,
    setSavedMovies,
    initialValue,
    setInitialValue,
    handleSubmitSearchForm,
    isLoading,
    isSearchPerformed,
    setIsSearchPerformed,
    isShortMoviesCheckboxChecked,
    setIsShortMoviesCheckboxChecked,
    searchResultMessage,
    filterByDuration,
  } = props;
  return (
    <div className="movies">
      <SearchForm
        initialValue={initialValue}
        setInitialValue={setInitialValue}
        handleSubmitSearch={handleSubmitSearchForm}
        isShortMoviesCheckboxChecked={isShortMoviesCheckboxChecked}
        setIsShortMoviesCheckboxChecked={setIsShortMoviesCheckboxChecked}
        setIsPerformed={setIsSearchPerformed}
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
        isSearchPerformed={isSearchPerformed}
        searchResultMessage={searchResultMessage}
      />
    </div>
  );
}
