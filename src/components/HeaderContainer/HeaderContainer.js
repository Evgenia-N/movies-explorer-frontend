import React from "react";
import { Link, NavLink } from "react-router-dom";
import './HeaderContainer.css';
import logo from '../../images/logo.svg';
import icon from '../../images/profile.svg'

export default function HeaderContainer() {

  const [isMenuOpened, setIsMenuOpened] = React.useState(false);

  function openMenu() {
    setIsMenuOpened(true);
  }

  function closeMenu() {
    setIsMenuOpened(false);
  }

  return (
    <>
    <div className={`header__menu-background ${isMenuOpened ? 'header__menu-background_visible' : ''}`} ></div>
    <div className="header__container">
      <div className="header__movies-container">
        <Link to="/" className="header__link-logo">
          <img src={logo} alt="Логотип" className="header__logo" />
        </Link>
        <div className="header__movies-links-container">
          <Link to="/movies" className="header__link-movies">
            Фильмы
          </Link>
          <Link to="/saved-movies" className="header__link-saved-movies">
            Сохраненные фильмы
          </Link>
        </div>
      </div>
      <Link to="/profile" className="header__link-profile">
        <img src={icon} alt="Иконка пользователя" className="header__icon" />
      </Link>
      <button className="header__open-menu-button" onClick={openMenu}/>
      <div className={`header__menu ${isMenuOpened ? 'header__menu_visible' : ''}`} >
        <button className="header__close-menu-button" onClick={closeMenu}/>
        <div className="header__navigation">
        <NavLink exact to="/" className="header__navigation-link" activeClassName="header__navigation-link_active">
          Главная
        </NavLink>
        <NavLink to="/movies" className="header__navigation-link" activeClassName="header__navigation-link_active">
          Фильмы
        </NavLink>
        <NavLink to="/saved-movies" className="header__navigation-link" activeClassName="header__navigation-link_active">
          Сохраненные фильмы
        </NavLink>
        </div>
        <Link to="/profile" className="header__navigation-link-profile">
          <img src={icon} alt="Иконка пользователя" className="header__icon"/>
        </Link>

      </div>
    </div>
    </>
  );
}