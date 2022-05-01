import React from "react";
import './Login.css'
import logo from '../../images/logo.svg';
import { Link } from "react-router-dom";
import { useForm } from './../../hooks/useForm'; 

export default function Login({onLogin}) {
  const { values, handleChange, errors, isValid, resetForm } = useForm();

  const handleSubmit = (e) => {
    e.preventDefault();
    const email=values.email;
    const password=values.password;
    onLogin(email, password);
  };

  React.useEffect(() => {
    resetForm({}, {}, true);
  }, [resetForm])

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
          minLength='2'
          maxLength='30'
          id="email"
          name="email"
          type="email"
          value={values.email || ''}
          onChange={handleChange}
          className="login__input"
        />
        <span className="login__error">{errors.email || ''}</span>
        <label htmlFor="password" className="login__form-label">Пароль</label>
        <input
          required
          minLength='2'
          maxLength='30'
          id="password"
          name="password"
          type="password"
          value={values.password || ''}
          onChange={handleChange}
          className="login__input"
        />
        <span className="login__error">{errors.password || ''}</span>
        <button
            type="submit"
            onSubmit={handleSubmit}
            disabled={!isValid}
            className={`login__link-button ${!isValid && "login__link-button_disabled"}`}> Войти
        </button>
      </form>
      <div className="login__register-container">
        <p className="login__register-text">Еще не зарегистрированы?</p> 
        <Link to="/signup" className="login__register-link">Регистрация</Link>
      </div>
    </div>
  );
}
