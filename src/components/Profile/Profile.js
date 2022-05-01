import React from "react";
import './Profile.css';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useForm } from './../../hooks/useForm';

export default function Profile({onEdit, onSignOut}) {
  const currentUser = React.useContext(CurrentUserContext);
  const [isDisabled, setIsDisabled] = React.useState(true);
  const [isEditModeOpen, setIsEditModeOpen] = React.useState(false);
  const { values, handleChange, errors, isValid, resetForm } = useForm();

  React.useEffect(() => {
    resetForm({name: currentUser.name, email: currentUser.email}, {}, true);
  }, [resetForm, currentUser])

  function handleSubmit(evt) {
    evt.preventDefault();
    setIsDisabled(true);
    setIsEditModeOpen(false);
    onEdit({
      name: values.name,
      email: values.email,
    });
  } 

  function editProfile() {
    setIsDisabled(false);
    setIsEditModeOpen(true);
  }

  return (
    <div className="profile">
      <p className="profile__greeting"> {`Привет${currentUser.name === ' ' ? '!' : ', ' + currentUser.name + '!' }`}</p>
      <form onSubmit={handleSubmit} className="profile__form">
        <label htmlFor="name" className="profile__form-label">Имя</label>
        <input
          required
          minLength='2'
          maxLength='30'
          id="name"
          name="name"
          type="name"
          value={values.name || ''}
          defaultValue={currentUser.name}
          onChange={handleChange}
          className="profile__input"
          disabled={isDisabled}
          autoComplete="off"
        />
        <span className="profile__error">{errors.name || ''}</span>
        <label htmlFor="email" className="profile__form-label">Email</label>
        <input
          required
          minLength='2'
          maxLength='30'
          id="email"
          name="email"
          type="email"
          value={values.email || ''}
          defaultValue={currentUser.email}
          onChange={handleChange}
          className="profile__input"
          disabled={isDisabled}
          autoComplete="off"
        />
        <span className="profile__error">{errors.email || ''}</span>
        <button className={`profile__submit-button ${!isValid && "profile__submit-button_disabled"} ${isEditModeOpen ? 'profile__submit-button_visible' : ''}`} type="submit" onClick={handleSubmit} disabled={!isValid}>Сохранить</button>
      </form>
      <button className={`profile__edit-button ${isEditModeOpen ? 'profile__edit-button_hidden' : ''}`} onClick={editProfile} >Редактировать</button>
      <button className={`profile__logout-button ${isEditModeOpen ? 'profile__logout-button_hidden' : ''}`} onClick={onSignOut}>Выйти из аккаунта</button>
    </div>
  )
}