import React from "react";
import './Profile.css';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

export default function Profile({onEdit, onSignOut}) {
  const currentUser = React.useContext(CurrentUserContext);
  const [isDisabled, setIsDisabled] = React.useState(true);
  const [isEditModeOpen, setIsEditModeOpen] = React.useState(false);
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');

  React.useEffect(() => {
    setName(currentUser.name);
    setEmail(currentUser.email);
  }, [currentUser]); 

  function handleNameChange(evt) {
    setName(evt.target.value);
  }
  
  function handleEmailChange(evt) {
    setEmail(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    setIsDisabled(true);
    setIsEditModeOpen(false);
    onEdit({
      name: name,
      email: email,
    });
  } 

  function editProfile() {
    setIsDisabled(false);
    setIsEditModeOpen(true);
  }

  // function handleLogout(e) {
  //   e.preventDefault();
  //   handleLogout();
  // }

  return (
    <div className="profile">
      <p className="profile__greeting"> {`Привет${currentUser.name === ' ' ? '!' : ', ' + currentUser.name + '!' }`}</p>
      <form onSubmit={handleSubmit} className="profile__form">
        <label htmlFor="name" className="profile__form-label">Имя</label>
        <input
          required
          id="name"
          name="name"
          type="name"
          value={name || ''}
          onChange={handleNameChange}
          className="profile__input"
          disabled={isDisabled}
          autoComplete="off"
        />
        <label htmlFor="email" className="profile__form-label">Email</label>
        <input
          required
          id="email"
          name="email"
          type="email"
          value={email || ''}
          onChange={handleEmailChange}
          className="profile__input"
          disabled={isDisabled}
          autoComplete="off"
        />
        <button className={`profile__submit-button ${isEditModeOpen ? 'profile__submit-button_visible' : ''}`} type="submit" onClick={handleSubmit}>Сохранить</button>
      </form>
      <button className={`profile__edit-button ${isEditModeOpen ? 'profile__edit-button_hidden' : ''}`} onClick={editProfile} >Редактировать</button>
      <button className={`profile__logout-button ${isEditModeOpen ? 'profile__logout-button_hidden' : ''}`} onClick={onSignOut}>Выйти из аккаунта</button>
    </div>
  )
}