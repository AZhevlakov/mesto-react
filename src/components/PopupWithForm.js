import React from 'react';

function PopupWithForm(props) {
  return (
    <div className={`popup popup_type_${props.name} ${props.isOpen ? "popup_opened" : ""}`}>
      <div className="popup__container">
        <form className="form" name={`form-${props.name}`} noValidate>
          <fieldset className="form__set">
            <legend className="form__heading">{props.title}</legend>
            {props.children}
            <button className="btn form__submit" type="submit">{props.buttonText}</button>
          </fieldset>
        </form>
        <button onClick={props.onClose} className="btn popup__close" type="button" aria-label="Закрыть форму" />
      </div>
    </div>
  );
}

export default PopupWithForm;
