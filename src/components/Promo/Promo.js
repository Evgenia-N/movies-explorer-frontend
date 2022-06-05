import React from "react";
import "./Promo.css";
import globe from "../../images/globe.svg";

export default function Promo() {
  return (
    <section className="promo">
      <div className="promo__container">
        <img
          src={globe}
          className="promo__pic_centered"
          alt="Земной шар, собранный из слова Web"
        />
        <div className="promo__text">
          <h1 className="promo__title">
            Учебный проект студента факультета Веб-разработки.
          </h1>
          <p className="promo__subtitle">
            Листайте ниже, чтобы узнать больше про этот проект и его создателя.
          </p>
          <a href="#info" className="promo__button">
            Узнать больше
          </a>
        </div>
        <img
          src={globe}
          className="promo__pic"
          alt="Земной шар, собранный из слова Web"
        />
      </div>
    </section>
  );
}
