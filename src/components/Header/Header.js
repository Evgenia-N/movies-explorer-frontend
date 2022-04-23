import React from "react";
import { Switch, Route, Link } from 'react-router-dom';
import HeaderContainer from "../HeaderContainer/HeaderContainer";
import './Header.css';
import logo from '../../images/logo.svg';

export default function Header({loggedIn}) {

  return (
    <Switch>
      <Route exact path='/'>
        <header className="header">
          {loggedIn
            ? <HeaderContainer />
            : <div className="header__container">
                <Link to="/" className="header__link-logo">
                  <img src={logo} alt="Логотип" className="header__logo" />
                </Link>
                <div className="header__authorization-container">
                 <Link to="/signup" className="header__link-register">Регистрация</Link>
                 <Link to="/signin"><button className='header__link-login'>Войти</button></Link> 
                </div>
              </div>}
          </header>
      </Route>

      <Route path={[`/movies`, `/saved-movies`, `/profile`]} >
        <header className="header header_authorized">  
          <HeaderContainer />
        </header>
      </Route>

      <Route path={[`/signin`, `/signup`, `/*`]} >
      </Route>
    </Switch>
  )
}