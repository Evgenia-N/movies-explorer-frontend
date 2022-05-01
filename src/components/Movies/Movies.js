import React from "react";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import './Movies.css'

export default function Movies (props) {
  const {
    movies,
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
    searchResultMessage
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
  )
}