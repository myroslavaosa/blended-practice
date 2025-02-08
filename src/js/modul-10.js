// Додай відображення дати і часу в реальному часі

import { refs } from './refs';

setInterval(() => {
  refs.date.textContent = new Date().toLocaleString();
}, 1000);
