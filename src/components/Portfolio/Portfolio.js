import React from "react";
import './Portfolio.css';

export default function Portfolio() {
  return(
    <section className="portfolio">
      <h3 className="portfolio__title" >Портфолио</h3>
      <div className="portfolio__project">
        <span className="portfolio__project-title">Статичный сайт</span>
        <a href="https://github.com/Evgenia-N/how-to-learn" className="portfolio__project-link" target="blank" aria-label="ссылка на статичный сайт"></a>
      </div>
      <div className="portfolio__project">        
        <span className="portfolio__project-title">Адаптивный сайт</span>
        <a href="https://evgenia-n.github.io/russian-travel/index.html#" className="portfolio__project-link" target="blank" aria-label="ссылка на адаптивный сайт"></a>
      </div>
      <div className="portfolio__project">
        <span className="portfolio__project-title">Одностраничное приложение</span>
        <a href="https://evgenia-n.github.io/react-mesto-auth" className="portfolio__project-link" target="blank" aria-label="ссылка на одностраничное приложение"></a>
      </div>
    </section>
     )
}
