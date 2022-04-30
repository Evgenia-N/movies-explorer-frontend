import React from "react";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import './SavedMovies.css';

export default function SavedMovies(props) {
  const {
    movies,
    savedMovies,
    setSavedMovies,
    handleSubmitSearchSavedForm,
    initialValue,
    setInitialValue,
    isLoading,
    isPerformed,
    searchResultMessage,
    isShortMoviesCheckboxChecked,
    setIsShortMoviesCheckboxChecked
  } = props;

  
  return (
    <div className="saved-movies">
      <SearchForm 
        handleSubmitSearch={handleSubmitSearchSavedForm}
        initialValue={initialValue}
        setInitialValue={setInitialValue}
        isShortMoviesCheckboxChecked={isShortMoviesCheckboxChecked}
        setIsShortMoviesCheckboxChecked={setIsShortMoviesCheckboxChecked}
      />
      <MoviesCardList 
        movies={movies}
        savedMovies={savedMovies}
        setSavedMovies={setSavedMovies}
        isLoading={isLoading}
        isPerformed={isPerformed}
        searchResultMessage={searchResultMessage}
      />
    </div>
  )
}