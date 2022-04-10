import React from "react";
import './Profile.css';

export default function Profile(onEdit, userData) {
  let {user} = userData;
  const [values, setValues] = React.useState({
    name: '',
    email: '',
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
    const name=values.name;
    const email=values.email;
    onEdit(name, email);
  };

    return (
    <div className="profile">
      <p className="profile__greeting"> Привет, {user}!</p>
      <form onSubmit={handleSubmit} className="profile__form">
        <label for="name" className="profile__form-label">Имя</label>
        <input
          required
          id="name"
          name="name"
          type="name"
          value={values.name || ''}
          onChange={handleChange}
          className="profile__input"
        />
        <label for="email" className="profile__form-label">Email</label>
        <input
          required
          id="email"
          name="email"
          type="email"
          value={values.email || ''}
          onChange={handleChange}
          className="profile__input"
        />
      </form>
      <button className='profile__edit-button'>Редактировать</button>
      <button className='profile__logout-button'>Выйти из аккаунта</button>
    </div>
  )
}