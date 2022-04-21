import React from "react";
import './FilterCheckbox.css';

export default function FilterCheckbox(props) {
  return (
  <>
    <input type="checkbox" className="movies-checkbox" id="checkbox" />
    <label htmlFor="checkbox" className="movies-checkbox__text">{props.name}</label>
  </>
  )
}
