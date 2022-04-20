import React from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import './SearchForm.css'

export default function SearchForm() {
  return (
    <>
       <form className="search-form">
         <div className="search-form__container">
            <input
              className="search-form__input"
              placeholder="Фильм"
              type="text"
              required />
            <button className="search-form__submit-button" type="submit" />
          </div>
          <div className="search-form__checkbox-container">
            <FilterCheckbox name={'Короткометражки'}/>
          </div>
       </form>
    </>
  )
}