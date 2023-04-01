function Card({ card, onImageClick }) {
  function handleClick() {
    onImageClick(card);
  }

  return (
    <li className="photo-card">
      <img onClick={handleClick} className="btn photo-card__image" src={card.link} alt={card.name} />
      <button className="btn photo-card__delete" type="button" aria-label="Удалить фотокарточку" />
      <div className="photo-card__description">
        <h2 className="photo-card__name">{card.name}</h2>
        <div className="photo-card__likes">
          <button className="btn photo-card__like" type="button" aria-label="Поставить сердечко" />
          <span className="photo-card__number-of-likes">{card.likes.length}</span>
        </div>
      </div>
    </li>
  );
}

export default Card;
