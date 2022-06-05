import React from "react";
import "./Techs.css";

export default function Techs() {
  return (
    <section className="techs">
      <div className="techs__top">
        <h2 className="techs__title">Технологии</h2>
      </div>
      <div className="techs__container">
        <span className="techs__subtitle">7 технологий</span>
        <p className="techs__text">
          На курсе веб-разработки мы освоили технологии, которые применили в
          дипломном проекте.
        </p>
      </div>
      <div className="techs__grid">
        <div className="techs__grid-cell">
          <span className="techs__name">HTML</span>
        </div>
        <div className="techs__grid-cell">
          <span className="techs__name">CSS</span>
        </div>
        <div className="techs__grid-cell">
          <span className="techs__name">JS</span>
        </div>
        <div className="techs__grid-cell">
          <span className="techs__name">React</span>
        </div>
        <div className="techs__grid-cell">
          <span className="techs__name">Git</span>
        </div>
        <div className="techs__grid-cell">
          <span className="techs__name">Express.js</span>
        </div>
        <div className="techs__grid-cell">
          <span className="techs__name">MongoDB</span>
        </div>
      </div>
    </section>
  );
}
