import React from 'react';
import Card from './Card';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

const Main = React.memo((props) => {
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <main className="content">
      <section className="profile" aria-label="Профиль">
        <button onClick={props.onEditAvatar} className="btn profile__avatar-edit" type="button" aria-label="Изменить аватар">
          <img className="profile__avatar" src={currentUser.avatar} alt="Аватар пользователя" />
        </button>
        <div className="profile__info">
          <h1 className="profile__name">{currentUser.name}</h1>
          <p className="profile__job">{currentUser.about}</p>
          <button onClick={props.onEditProfile} className="btn profile__edit" type="button" aria-label="Редактировать профиль" />
        </div>
        <button onClick={props.onAddPlace} className="btn profile__photo-card-add" type="button" aria-label="Добавить фотокарточку" />
      </section>
      <section className="photo-gallery" aria-label="Галерея фотографий">
        <ul className="photo-gallery__items">
          {props.cards.map((card) => (
            <Card
              key={card._id}
              card={card}
              onCardClick={props.onCardClick}
              onCardLike={props.onCardLike}
              onCardDelete={props.onCardDelete}
            />
          ))}
        </ul>
      </section>
    </main>
  );
});

export default Main;
