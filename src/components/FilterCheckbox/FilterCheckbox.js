import React from "react";
import './FilterCheckbox.css';

export default function FilterCheckbox() {
  return (
  <div>
    <input type="checkbox" className="movies-checkbox" id="checkbox" />
    <label htmlFor="checkbox" className="movies-checkbox__text">Короткометражки</label>
  </div>
  )
}
