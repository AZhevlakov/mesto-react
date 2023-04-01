function ImagePopup({card, onClose}) {
  return (
    <div className={`popup popup_type_img-open ${card ? "popup_opened" : ""}`}>
      <div className="popup__container popup__container_img">
        <figure className="photo-viewer">
          <img className="photo-viewer__image" src={card ? card.link : ""} alt={card ? card.name : ""} />
          <figcaption className="photo-viewer__description">{card ? card.name : ""}</figcaption>
        </figure>
        <button onClick={onClose} className="btn popup__close" type="button" aria-label="Закрыть форму" />
      </div>
    </div>
  );
}

export default ImagePopup;
