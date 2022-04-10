import React from "react";
import './Main.css';
import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';
import Techs from "../Techs/Techs";
import AboutMe from "../AboutMe/AboutMe";
import Portfolio from "../Portfolio/Portfolio"
import Footer from "../Footer/Footer";
import Login from "../Login/Login"
import NotFound from "../NotFound/NotFound"
import Register from "../Register/Register"
import Profile from "../Profile/Profile"

export default function Main() {
  return (
    <div className="main page__content">
      <Promo />
      <AboutProject />
      <Techs />
      <AboutMe />
      <Portfolio />
      <Footer />
      <Profile />
    </div>
  )
}
