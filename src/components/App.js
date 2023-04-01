import React from 'react';
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(null);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  return (
    <div className="page">
      <div className="page__container">
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
        />
        <Footer />
      </div>

      {/* Форма редактирования профиля */}
      <PopupWithForm
        name="profile-edit"
        title="Редактировать профиль"
        buttonText="Сохранить"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
        <label className="form__field">
          <input className="form__input form__input_el_name" type="text" id="name-input" name="name-input" placeholder="Имя" minLength="2" maxLength="40" required />
          <span className="form__input-error name-input-error" />
        </label>
        <label className="form__field">
          <input className="form__input form__input_el_job" type="text" id="job-input" name="job-input" placeholder="Занятие" minLength="2" maxLength="200" required />
          <span className="form__input-error job-input-error" />
        </label>
      </PopupWithForm>

      {/* Форма добавления новой карточки */}
      <PopupWithForm
        name="photo-card-add"
        title="Новое место"
        buttonText="Создать"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
        <label className="form__field">
          <input className="form__input form__input_el_card-name" type="text" id="card-name-input" name="card-name-input" placeholder="Название" minLength="2" maxLength="30" required />
          <span className="form__input-error card-name-input-error" />
        </label>
        <label className="form__field">
          <input className="form__input form__input_el_card-link" type="url" id="card-link-input" name="card-link-input" placeholder="Ссылка на картинку" required />
          <span className="form__input-error card-link-input-error" />
        </label>
      </PopupWithForm>

      {/* Форма обновления аватара */}
      <PopupWithForm
        name="avatar-edit"
        title="Обновить аватар"
        buttonText="Сохранить"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <label className="form__field">
          <input className="form__input form__input_el_avatar-link" type="url" id="avatar-link-input" name="avatar-link-input" placeholder="Ссылка на аватар" required />
          <span className="form__input-error avatar-link-input-error" />
        </label>
      </PopupWithForm>

      {/* Форма подтверждения удаления карточки */}
      <PopupWithForm
        name="confirm"
        title="Вы уверены?"
        buttonText="Да"
        onClose={closeAllPopups}
      />

      {/* Форма просмотра изображения */}
      <ImagePopup
        card={selectedCard}
        onClose={closeAllPopups}
      />

    </div>
  );
}

export default App;
