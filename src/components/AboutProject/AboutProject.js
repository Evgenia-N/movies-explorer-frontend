import React from "react";
import './AboutProject.css';

export default function AboutProject() {
  return(
    <section className="about-project">
      <div className="about-project__top">
        <h2 className="about-project__title" id="info">О проекте</h2>
      </div>
      <div className="about-project__details">
        <p className="about-project__text">Дипломный проект включал 5 этапов</p>
        <p className="about-project__text about-project__second-text">На выполнение диплома ушло 5 недель</p>
        <p className="about-project__description">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        <p className="about-project__description about-project__second-description">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
      </div>
      <div className="about-project__timing">
        <span className="about-project__backend-timing">1 неделя</span>
        <span className="about-project__frontend-timing">4 недели</span>
        <span className="about-project__timing-description">Back-end</span>
        <span className="about-project__timing-description">Front-end</span>
      </div>
    </section>

  )
}