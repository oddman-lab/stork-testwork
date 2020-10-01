import User from './userComponent';
import { mockUsers } from './mock';

const addContactBtn = document.querySelector('.button--new');
const newContactWindow = document.querySelector('.create-contact');
const newContactForm = document.querySelector('.create-contact__form');
const nameFiled = newContactForm.querySelector('input[type="text"]');
const phoneFiled = newContactForm.querySelector('input[type="tel"]');
const mailFiled = newContactForm.querySelector('input[type="email"]');
const searchForm = document.querySelector('.search');
const searchField = searchForm.querySelector('input[type="search"]');
const refreshBtn = document.querySelector('.button--refresh');
export const container = document.querySelector('.contacts__list');
let userInstance;

searchForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const contactsList = container.querySelectorAll('input[name="name"]');

  Array.from(contactsList)
    .filter((item) => item.value.split(' ')[0] !== searchField.value)
    .forEach((element) => {
      console.log(element);
      element.closest('li').classList.add('visually-hidden');
    });
});

addContactBtn.addEventListener('click', () => {
  newContactWindow.classList.toggle('hide');
  setTimeout(() => (newContactWindow.getElementsByClassName.zIndex = '0'));
});

refreshBtn.addEventListener('click', () => {
  container.querySelectorAll('li').forEach((el) => el.classList.remove('visually-hidden'));
  searchField.value = '';
});

newContactForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  userInstance = new User(nameFiled.value, mailFiled.value, phoneFiled.value).init();

  newContactForm.reset();
});

document.addEventListener('DOMContentLoaded', () => {
  mockUsers.forEach((user) => {
    userInstance = new User(user.name, user.email, user.telephone).init();
  });
});
