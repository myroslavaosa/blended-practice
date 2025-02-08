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

import { stringify } from "postcss";
import { refs } from "./js/refs";

const USER_DATA = {
  email: 'user@mail.com',
  password: 'secret',
};

const LS_KEY = 'userdata';

refs.form.addEventListener('submit', (e) => {
  e.preventDefault();
  const emailInput = refs.emailInfo.value.trim();
  const passwordInput = refs.passwordInfo.value.trim();
  if (emailInput === "" || passwordInput === "") {
    alert('Pls put something it!');
    return;
  }
  if (emailInput !== USER_DATA.email || passwordInput !== USER_DATA.password) {
        alert('Wrong password or email!')
    return;
  }
  localStorage.setItem(LS_KEY, JSON.stringify({ email: emailInput, password: passwordInput }))
  refs.btn.textContent = 'Logout';
  refs.emailInfo.setAttribute('readonly', true);
  refs.passwordInfo.setAttribute('readonly', true);

})