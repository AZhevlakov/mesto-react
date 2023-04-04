import React from 'react';
import PopupWithForm from './PopupWithForm';

const EditAvatarPopup = React.memo(({ isOpen, onClose, onUpdateAvatar }) => {
  const avatarRef = React.useRef();

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateAvatar({
      avatar: avatarRef.current.value
    });
  }

  return (
    <PopupWithForm
      name="avatar-edit"
      title="Обновить аватар"
      buttonText="Сохранить"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <label className="form__field">
        <input ref={avatarRef} className="form__input form__input_el_avatar-link" type="url" id="avatar-link-input" name="avatar-link-input" placeholder="Ссылка на аватар" required />
        <span className="form__input-error avatar-link-input-error" />
      </label>
    </PopupWithForm>
  );
});

export default EditAvatarPopup;
