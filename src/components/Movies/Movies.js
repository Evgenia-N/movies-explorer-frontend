import React from "react";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import './Movies.css'

export default function Movies (props) {
  const {
    movies,
    initialValue,
    setInitialValue,
    handleSubmitSearchForm,
    isLoading,
    isPerformed,
    storagedMovies,
    isShortMoviesCheckboxChecked,
    setIsShortMoviesCheckboxChecked,
    searchResultMessage
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
        isLoading={isLoading}
        isPerformed={isPerformed}
        storagedMovies={storagedMovies}
        searchResultMessage={searchResultMessage}
      />
    </div>
  )
}