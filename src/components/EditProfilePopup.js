import React from 'react';
import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

const EditProfilePopup = React.memo(({ isOpen, onClose, onUpdateUser }) => {
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');
  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateUser({
      name,
      about: description
    });
  }

  return (
    <PopupWithForm
      name="profile-edit"
      title="Редактировать профиль"
      buttonText="Сохранить"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <label className="form__field">
        <input value={name || ''} onChange={handleNameChange} className="form__input form__input_el_name" type="text" id="name-input" name="name-input" placeholder="Имя" minLength="2" maxLength="40" required />
        <span className="form__input-error name-input-error" />
      </label>
      <label className="form__field">
        <input value={description || ''} onChange={handleDescriptionChange} className="form__input form__input_el_job" type="text" id="job-input" name="job-input" placeholder="Занятие" minLength="2" maxLength="200" required />
        <span className="form__input-error job-input-error" />
      </label>
    </PopupWithForm>
  );
});

export default EditProfilePopup;
