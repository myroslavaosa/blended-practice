// Перед вами форма для авторизації на сайті (правильні дані для входу збережені в обʼєкті USER_DATA)

// Розбийте код на кілька файлів:
// storage.js - функції для роботи зі сховищем;
// refs.js - посилання на всі потрібні елементи в html;
// main.js - головний файл, де вся основна логіка додатка.
// Ви маєте додати перевірку введених даних при сабміті:
// Якщо введені дані не збігаються зі збереженими, викликайте аlert і
// повідомляйте про помилку.

// Якщо імейл і пароль користувача збігаються, зберігайте дані з форми
// у локальне сховище і змінюйте кнопку Login на Logout, також робіть поля введення
// недоступними для змін.
// При перезавантаженні сторінки, якщо користувач авторизован, ми маємо бачити logout-кнопку
// та недоступні для зміни поля з даними користувача.
// Клік по кнопці logout повертає все до початкового вигляду і видаляє дані користувача
// з локального сховища.

import icon from './img/javascript.svg'
import 'izitoast/dist/css/iziToast.min.css';
import iziToast from 'izitoast';
import { refs } from './js/refs';
import { get, remove, save } from './js/storage';

const USER_DATA = {
  email: 'user@mail.com',
  password: 'secret',
};

const LS_KEY = 'userdata';

refs.form.addEventListener('submit', e => {
  e.preventDefault();
  if(refs.btn.textContent === 'Logout') {
    remove(LS_KEY);
    refs.form.reset();
    refs.emailInfo.removeAttribute('readonly');
    refs.passwordInfo.removeAttribute('readonly');
    refs.btn.textContent = 'Login';
    return;
  }
  const emailInput = refs.emailInfo.value.trim();
  const passwordInput = refs.passwordInfo.value.trim();
  if (emailInput === '' || passwordInput === '') {
    iziToast.warning({
      iconUrl: icon,
      title: 'Caution',
      message: 'Pls put something it!',
  });
    return;
  }
  if (emailInput !== USER_DATA.email || passwordInput !== USER_DATA.password) {
    iziToast.error({
      title: 'Error',
      message: 'Wrong password or email!',
  });
    return;
  }
  save(LS_KEY, {
    email: emailInput,
    password: passwordInput,
  });
  refs.btn.textContent = 'Logout';
  refs.emailInfo.setAttribute('readonly', true);
  refs.passwordInfo.setAttribute('readonly', true);

  
});

const parseData = get(LS_KEY);
if (parseData) {
  refs.emailInfo.value = parseData.email || '';
  refs.passwordInfo.value = parseData.password || '';

  refs.emailInfo.setAttribute('readonly', true);
  refs.passwordInfo.setAttribute('readonly', true);
  refs.btn.textContent = 'Logout';
}

