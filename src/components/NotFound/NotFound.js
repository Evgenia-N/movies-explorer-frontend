import React from "react";
import './NotFound.css';
import { useHistory } from "react-router-dom";

export default function NotFound() {
  const history = useHistory();
  return (
    <div className="page-not-found">
      <div className="page-not-found__container">
        <span className="page-not-found__code">404</span>
        <p className="page-not-found__text">Страница не найдена</p>
        <button className="page-not-found__go-back-button" onClick={() => history.goBack()}>Назад</button>
      </div>
    </div>
  )
}