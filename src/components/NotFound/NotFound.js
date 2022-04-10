import React from "react";
import './NotFound.css';

export default function NotFound() {
  return (
    <div className="page-not-found">
      <div className="page-not-found__container">
        <span className="page-not-found__number">404</span>
        <p className="page-not-found__text">Страница не найдена</p>
        <span className="page-not-found__go-back-button">Назад</span>
      </div>
    </div>
  )
}