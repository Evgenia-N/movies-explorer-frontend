import React from "react";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import './Movies.css'

export default function Movies (props) {
  const {
    movies,
    savedMovies,
    initialValue,
    setInitialValue,
    handleSubmitSearchForm,
    isLoading,
    isPerformed,
    isShortMoviesCheckboxChecked,
    setIsShortMoviesCheckboxChecked,
    searchResultMessage,
  } = props;
  return (
    <div className="movies">
      <SearchForm 
        initialValue={initialValue}
        setInitialValue={setInitialValue}
        handleSubmitSearchForm={handleSubmitSearchForm}
        isShortMoviesCheckboxChecked={isShortMoviesCheckboxChecked}
        setIsShortMoviesCheckboxChecked={setIsShortMoviesCheckboxChecked}/>
      <MoviesCardList 
        movies={movies}
        savedMovies={savedMovies}
        isLoading={isLoading}
        isPerformed={isPerformed}
        searchResultMessage={searchResultMessage}
      />
    </div>
  )
}