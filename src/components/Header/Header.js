import React from "react";
import { Switch, Route, Link } from 'react-router-dom';
import './Header.css';
import logo from '../../images/logo.svg';
import icon from '../../images/profile.svg'
export default function Header() {
  const [isAuthorised, setIsAuthorised] = React.useState(false);

  return (
    <Switch>
      <Route exact path='/'>
        <header className="header">
          <div className="header__container">
            <Link to="/" className="header__link-main">
              <img src={logo} alt="Логотип" className="header__logo" />
            </Link>
            {isAuthorised
            ? <Link to="/profile" className="header__link-profile">
                <img src={icon} alt="Иконка пользователя" className="header__icon"/>
              </Link>
            : <div className="header__authorization-container">
              <Link to="/signup" className="header__link-register">Регистрация</Link>
              <Link to="/signin"><button className='header__link-login'>Войти</button></Link> 
            </div>}
          </div>
        </header>
      </Route>

      <Route path={[`/movies`, `/saved-movies`, `/profile`]} >
        <header className="header header_authorized">  
          <div className="header__container">
            <div className="header__movies-container">
              <Link to="/" className="header__link-main">
                <img src={logo} alt="Логотип" className="header__logo" />
              </Link>
              <div className="header__movies-links-container">
                <Link to="/movies" className="header__link-movies">Фильмы</Link>
                <Link to="/saved-movies" className="header__link-saved-movies">Сохраненные фильмы</Link>
              </div>
            </div>
            <Link to="/profile" className="header__link-profile">
              <img src={icon} alt="Иконка пользователя" className="header__icon"/>
            </Link>
          </div>
        </header>
      </Route>

      <Route path={[`/signin`, `/signup`, `/*`]} >
      </Route>

    </Switch>
  )
}