import React from "react";
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../images/logo.svg';
//import icon from '../../images/icon.svg'
export default function Header() {
  
  return (
    <header className="header">
      <div className="header__container">
      <Link to="/" className="header__link-main"><img src={logo} alt="Логотип" className="header__logo" /></Link>
        <div className="header__authorization-container">
        <Link to="/signup" className="header__link-register">Регистрация</Link>
        <Link to="/signin"><button className='header__link-login'>Войти</button></Link> 
        </div>
      </div>
    </header>
  )
}

// isLoggedIn? header_loggedin цвет
/* <div className="header__container">
  <div className="header__movies-container">
    <span></span>
    <span></span>
  </div>
  <div className="header__account-container">
    <span></span>
    <img src={icon} alt="иконка"></img>
  </div>
</div> */