import React from "react";
import './Profile.css';

export default function Profile() {
  const [isDisabled, setIsDisabled] = React.useState(true);
  const [isEditModeOpen, setIsEditModeOpen] = React.useState(false);

  function editProfile() {
    setIsDisabled(false);
    setIsEditModeOpen(true);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setIsDisabled(true);
    setIsEditModeOpen(false);
  }

  const [userdata, setUserData] = React.useState({
    name: ' ',
    email: ' ',
  });

  function handleInputChange(e) {
    setUserData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }

    return (
    <div className="profile">
      <p className="profile__greeting"> {`Привет${userdata.name === ' ' ? '!' : ', ' + userdata.name + '!' }`}</p>
      <form onSubmit={handleSubmit} className="profile__form">
        <label htmlFor="name" className="profile__form-label">Имя</label>
        <input
          required
          id="name"
          name="name"
          type="name"
          value={userdata.name || ''}
          onChange={handleInputChange}
          className="profile__input"
          disabled={isDisabled}
          autocomplete="off"
          minLength='2'
          maxLength='30'
        />
        <label htmlFor="email" className="profile__form-label">Email</label>
        <input
          required
          id="email"
          name="email"
          type="email"
          value={userdata.email || ''}
          onChange={handleInputChange}
          className="profile__input"
          disabled={isDisabled}
          autocomplete="off"
          minLength='2'
          maxLength='30'
        />
        <button className={`profile__submit-button ${isEditModeOpen ? 'profile__submit-button_visible' : ''}`} type="submit">Сохранить</button>
      </form>
      <button className={`profile__edit-button ${isEditModeOpen ? 'profile__edit-button_hidden' : ''}`} onClick={editProfile} >Редактировать</button>
      <button className={`profile__logout-button ${isEditModeOpen ? 'profile__logout-button_hidden' : ''}`}>Выйти из аккаунта</button>
    </div>
  )
}