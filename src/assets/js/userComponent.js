import { container } from './main';

let counter = 0;

export default class User {
  constructor(name, email, phone) {
    this.name = name;
    this.email = email;
    this.phone = phone;
    this._element = null;
  }

  getTemaplte() {
    return `
        <input
          class="contacts__input"
          type="text"
          name="name"
          minlength="3"
          maxlength="32"
          value="${this.name}"
          disabled
        />
        <input 
          class="contacts__input" 
          type="email" 
          name="email" 
          value="${this.email}"
          disabled
        />
        <input
          class="contacts__input"
          type="tel"
          name="phone"
          pattern="[\+]\d{1}[\(]\d{3}[\)]\d{3}[\-]\d{2}[\-]\d{2}"
          minlength="16"
          maxlength="16"
          value="${this.phone}"
          disabled
        />
        <button class="button button--edit"></button>
        <button class="button button--remove"></button>
      `;
  }

  init() {
    this.createElement();
    container.appendChild(this._element);
    this.setListener();
  }

  createElement() {
    this._element = document.createElement('li');
    this._element.classList.add('contacts__item');
    this._element.innerHTML = this.getTemaplte();
  }

  setListener() {
    this._element.addEventListener('click', this.removeElement);
  }

  removeElement(evt) {
    this._element = null;

    const clickTarget = evt.target;
    const targetContainer = clickTarget.closest('li').querySelectorAll('input');

    if (clickTarget.classList.contains('button--edit')) {
      counter += 1;
      targetContainer.forEach((input) => {
        counter % 2 === 0
          ? input.setAttribute('disabled', 'true')
          : input.removeAttribute('disabled', 'true');
      });

      clickTarget.closest('li').classList.toggle('contacts__item--editable');
      clickTarget.classList.toggle('button--save');
    } else if (clickTarget.classList.contains('button--remove')) {
      container.removeChild(clickTarget.closest('li'));
    }
  }
}
