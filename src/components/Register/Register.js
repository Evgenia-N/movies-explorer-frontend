import React from "react";
import './Register.css';
import logo from '../../images/logo.svg';

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
          <img src={logo} alt="Логотип" className="register__logo" />
          <span className="register__welcome">Добро пожаловать!</span>
        </div>
        <form onSubmit={handleSubmit} className="register__form">
        <label for="name" className="login__form-label">Имя</label>
          <input
            id="name"
            name="name"
            type="text"
            value={values.name}
            onChange={handleChange}
            className="register__input"
          />
        <label for="email" className="login__form-label">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            value={values.email}
            onChange={handleChange}
            className="register__input"
          />
          <label for="password" className="login__form-label">Пароль</label>
          <input
            id="password"
            name="password"
            type="password"
            value={values.password}
            onChange={handleChange}
            className="register__input"
          />
          <button
            type="submit"
            onSubmit={handleSubmit}
            className="register__link"> Зарегистрироваться
          </button>
        </form>
        <p className="register-login__text">Уже зарегистрированы? Войти</p>
          {/* <Link to="/sign-in" className="register-login__link">
            Войти
          </Link> */}
        </div>
    );
}
