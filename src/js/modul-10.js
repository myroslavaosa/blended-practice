// Додай відображення дати і часу в реальному часі

import { refs } from './refs';

setInterval(() => {
  refs.date.textContent = new Date().toLocaleString();
}, 1000);

// - Використовуй prompt та повертай значення звідти.
// - Створи функцію, яка буде набувати значення з prompt і повертатиме проміс.
// Якщо значення не є числом, відхиляй проміс та логіруй "error".
// Якщо значення парне, вирішуй проміс та повертай "even" через 1 секунду.
// Якщо значення не парне, вирішуй проміс та повертай "odd" через 2 секунди.

const answer = prompt('Enter something');

function createPromise (answer) {
  return new Promise((resolve, reject) => {
    const number = Number(answer);
    if (isNaN(number)) {
      reject('error');
    }
    if (number % 2 === 0) {
      setTimeout( () => resolve('even'), 1000)
    }

    if (number % 2 !== 0) {
      setTimeout( () => resolve('odd'), 2000)
    }
  })
}

createPromise(answer)
  .then((value) => {
    console.log(value);
  })
  .catch((e) => {
    console.log(e);
  })