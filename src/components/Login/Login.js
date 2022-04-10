import React from "react";
import './Login.css'
import logo from '../../images/logo.svg';

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
        <img src={logo} alt="Логотип" className="login__logo" />
        <span className="login__welcome">Рады видеть!</span>
      </div>
      <form onSubmit={handleSubmit} className="login__form">
      <label for="email" className="login__form-label">Email</label>
        <input
          required
          id="email"
          name="email"
          type="email"
          value={values.email || ''}
          onChange={handleChange}
          className="login__input"
        />
        <label for="password" className="login__form-label">Пароль</label>
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
            className="login__link"> Войти
        </button>
      </form>
      
          <p className="login__register-text">Еще не зарегистрированы? Регистрация</p>
          {/* <Link to="/sign-in" className="login__register-link">
            Войти
          </Link> */}

    </div>
  );
}
