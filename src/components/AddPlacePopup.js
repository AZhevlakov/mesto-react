import React from 'react';
import PopupWithForm from './PopupWithForm';

const AddPlacePopup = React.memo(({ isOpen, onClose, onAddPlace }) => {
  const [name, setName] = React.useState('');
  const [link, setLink] = React.useState('');

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleLinkChange(e) {
    setLink(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    onAddPlace({
      name,
      link
    });
  }

  return (
    <PopupWithForm
      name="photo-card-add"
      title="Новое место"
      buttonText="Создать"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <label className="form__field">
        <input value={name || ''} onChange={handleNameChange} className="form__input form__input_el_card-name" type="text" id="card-name-input" name="card-name-input" placeholder="Название" minLength="2" maxLength="30" required />
        <span className="form__input-error card-name-input-error" />
      </label>
      <label className="form__field">
        <input value={link || ''} onChange={handleLinkChange} className="form__input form__input_el_card-link" type="url" id="card-link-input" name="card-link-input" placeholder="Ссылка на картинку" required />
        <span className="form__input-error card-link-input-error" />
      </label>
    </PopupWithForm>
  );
});

export default AddPlacePopup;
