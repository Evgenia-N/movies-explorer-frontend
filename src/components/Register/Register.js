import React from "react";
import './Register.css';
import logo from '../../images/logo.svg';
import { Link } from "react-router-dom";

export default function Register({onRegister}) {
  const [values, setValues] = React.useState({
    name: '',
    email:'',
    password:'',
  });

  const handleChange = (e) => {
    const {name, value} = e.target;
    setValues((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const name=values.name;
    const email=values.email;
    const password=values.password;
    onRegister(name, email, password);
  }

    return (
      <div className="register">
        <div className="register__container">
        <Link to="/"><img src={logo} alt="Логотип" className="register__logo" /></Link>
          <span className="register__welcome">Добро пожаловать!</span>
        </div>
        <form onSubmit={handleSubmit} className="register__form">
        <label htmlFor="name" className="login__form-label">Имя</label>
          <input
            id="name"
            name="name"
            type="text"
            value={values.name}
            onChange={handleChange}
            className="register__input"
            required
          />
        <label htmlFor="email" className="login__form-label">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            value={values.email}
            onChange={handleChange}
            className="register__input"
            required
          />
          <label htmlFor="password" className="login__form-label">Пароль</label>
          <input
            id="password"
            name="password"
            type="password"
            value={values.password}
            onChange={handleChange}
            className="register__input"
            required
          />
          <button
            type="submit"
            onSubmit={handleSubmit}
            className="register__link-button"> Зарегистрироваться
          </button>
        </form>
        <div className="register__login-container">
          <p className="register__login-text">Уже зарегистрированы?</p>
          <Link to="/signin" className="register__login-link">Войти</Link>
        </div>
      </div>
    );
}
