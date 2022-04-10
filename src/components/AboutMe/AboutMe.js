import React from "react";
import './AboutMe.css';
import photo from '../../images/myPhoto.png'

export default function AboutMe() {
  return (
    <section className="about-me">
      <div className="about-me__top">
        <h2 className="about-me__title">Студентка</h2>
      </div>
      <div className="about-me__container">
        <div className="about-me__text-container"> 
          <span className="about-me__name">Евгения</span>
          <p className="about-me__info">Начинающая фронтенд-разработчица, 28 лет</p>
          <p className="about-me__story">Я родилась в Обнинске, закончила юридический факультет МГУ. Однажды я поняла, 
          что не реализуюсь в профессии юриста в полной мере, и что работа не вызывает былого интереса. 
          Вдохновившись опытом своих подруг и друзей, работающих в айти, я решила пройти курс "Веб-разработчик" на Яндекс Практикуме. 
          Работа за ноутбуком всегда привлекала меня больше, чем суды. Посмотрим, что из этого выйдет!</p>
          <div className="about-me__links-container">
            <a href="https://www.linkedin.com" className="about-me__link" target="blank" aria-label="ссылка на профиль в соц.сети">LinkedIn</a>
            <a href="https://github.com/Evgenia-N" className="about-me__link" target="blank" aria-label="ссылка на аккаунт на Гитхабе">Github</a>
          </div>
        </div>
        <img src={photo} alt="Фото автора дипломного проекта" className="about-me__pic"/>
      </div>
    </section>
  )
}