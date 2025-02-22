// Створи додаток для пошуку зображень по ключовому слову.
// При завантаженні сторінки має відбуватись запит за популярними зображеннями (ключове слово - popular),
// а при введенні якогось слова в форму - пошук відбувається по цьому ключовому слову і сторінка перемальовується.
// Використовуй UnsplashAPI (https://unsplash.com/documentation) для запитів. Створи клас UnsplashAPI для інкапсуляції
// логіки запитів в одному місті в окремому файлі.
// Створи окремо файл createGalleryCard.js, в якому буде функція, що відповідатиме за створення розмітки.
// В головному файлі gallery.js має бути вся логіка роботи застосунку.
// Підключи пагінацію, використовуючи бібліотеку tui-pagination, щоб можна було робити запит за різними сторінками.
// Додай слухача на форму, щоб робити новий запит по ключовому слову (додавши відповідний метод класу UnsplashAPI).
// Додай лоадер під час завантаження даних з бекенда.
// Не забудь про відповідні перевірки і сповіщення при роботі з запитами і з формою.

import { UnsplashAPI } from './Unsplash-api';
import { createGalleryCard } from './createGalleryCard';
import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.min.css';

const gallery = document.querySelector('.gallery');

const container = document.getElementById('tui-pagination-container');
const pagination = new Pagination(container, {
  totalItems: 0,
  itemsPerPage: 12,
  visiblePages: 5,
  page: 1,
});

const page = pagination.getCurrentPage();

const api = new UnsplashAPI();
api.getPopularPhotos(page).then(response => {
  const markup = createGalleryCard(response.results);
  pagination.reset(response.total);
  gallery.innerHTML = markup;
  console.log(response);
});

pagination.on('afterMove', event => {
  const currentPage = event.page;
  api.getPopularPhotos(currentPage).then(response => {
  const markup = createGalleryCard(response.results);
  gallery.innerHTML = markup;
  console.log(response);
});
});


