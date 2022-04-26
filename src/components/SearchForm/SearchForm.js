import React from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import './SearchForm.css'

export default function SearchForm(props) {
  const {
    initialValue,
    setInitialValue,
    handleSubmitSearchForm,
    isShortMoviesCheckboxChecked,
    setIsShortMoviesCheckboxChecked
  } = props;

  const [ request, setRequest ] = React.useState(initialValue);

  function handleChange(evt) {
    setInitialValue(evt.target.value);
    setRequest(evt.target.value);
  }

  function submitForm(evt) {
     evt.preventDefault();
     handleSubmitSearchForm(request);
  }

  return (
    <>
      <form className="search-form">
        <div className="search-form__container">
          <input
            className="search-form__input"
            placeholder="Фильм"
            type="text"
            onChange={handleChange}
            defaultValue={initialValue || ''}
            required
          />
          <button className="search-form__submit-button" type="submit" onClick={submitForm}/>
        </div>
        <div className="search-form__checkbox-container">
          <FilterCheckbox
            isShortMoviesCheckboxChecked={isShortMoviesCheckboxChecked}
            setIsShortMoviesCheckboxChecked={setIsShortMoviesCheckboxChecked}
            name={"Короткометражки"}
          />
        </div>
      </form>
    </>
  );
}