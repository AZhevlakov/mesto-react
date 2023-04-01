import React from 'react';
import { api } from '../utils/api';
import Card from './Card';

function Main(props) {
  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(([userData, initialCards]) => {
        setUserName(userData.name);
        setUserDescription(userData.about);
        setUserAvatar(userData.avatar);
        //userId = userData._id;

        setCards(initialCards);
      })
      .catch(err => alert(err));
  }, []);

  return (
    <main className="content">
      <section className="profile" aria-label="Профиль">
        <button onClick={props.onEditAvatar} className="btn profile__avatar-edit" type="button" aria-label="Изменить аватар">
          <img className="profile__avatar" src={userAvatar} alt="Аватар пользователя" />
        </button>
        <div className="profile__info">
          <h1 className="profile__name">{userName}</h1>
          <p className="profile__job">{userDescription}</p>
          <button onClick={props.onEditProfile} className="btn profile__edit" type="button" aria-label="Редактировать профиль" />
        </div>
        <button onClick={props.onAddPlace} className="btn profile__photo-card-add" type="button" aria-label="Добавить фотокарточку" />
      </section>
      <section className="photo-gallery" aria-label="Галерея фотографий">
        <ul className="photo-gallery__items">
          {cards.map((card) => (
            <Card key={card._id} card={card} onImageClick={props.onCardClick} />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
