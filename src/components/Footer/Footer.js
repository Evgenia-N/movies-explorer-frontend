import React from "react";
import './Footer.css';

export default function Footer () {
  return (
    <footer className="footer">
     <div className="footer__about">
       <p className="footer__about-text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
     </div>
     <div className="footer__container">
       <p class="footer__copyright">&copy; 2022</p>
       <div className="footer__links">
         <a className="footer__link" href="https://praktikum.yandex.ru" target="blank" aria-label="ссылка на Яндекс.Практикум">Яндекс.Практикум</a>
         <a href="https://github.com/Evgenia-N" className="footer__link" target="blank" aria-label="ссылка на аккаунт на Гитхабе">Github</a>
         <a href="https://www.linkedin.com" className="footer__link" target="blank" aria-label="ссылка на профиль в соц.сети">LinkedIn</a>
       </div>
     </div>
    </footer>
  )
}