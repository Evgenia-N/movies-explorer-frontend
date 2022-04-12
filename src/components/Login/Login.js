import React from "react";
import './Login.css'
import logo from '../../images/logo.svg';
import { Link } from "react-router-dom";

export default function Login({onLogin}) {
  const [values, setValues] = React.useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const email=values.email;
    const password=values.password;
    onLogin(email, password);
  };

  return (
    <div className="login">
      <div className="login__container">
        <Link to="/"><img src={logo} alt="Логотип" className="login__logo" /></Link>
        <span className="login__welcome">Рады видеть!</span>
      </div>
      <form onSubmit={handleSubmit} className="login__form">
      <label htmlFor="email" className="login__form-label">Email</label>
        <input
          required
          id="email"
          name="email"
          type="email"
          value={values.email || ''}
          onChange={handleChange}
          className="login__input"
        />
        <label htmlFor="password" className="login__form-label">Пароль</label>
        <input
          required
          id="password"
          name="password"
          type="password"
          value={values.password || ''}
          onChange={handleChange}
          className="login__input"
        />
        <button
            type="submit"
            onSubmit={handleSubmit}
            className="login__link-button"> Войти
        </button>
      </form>
      <div className="login__register-container">
        <p className="login__register-text">Еще не зарегистрированы?</p> 
        <Link to="/signup" className="login__register-link">Регистрация</Link>
      </div>
    </div>
  );
}
