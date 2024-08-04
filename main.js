// Задание 1
// 1. Поиск в интернете (бесплатные api примеры).
// 2. Найти любые данные, на произвольную тему.
// 3. Создать файл data.js.
// 4. Создать переменную которая будет хранить данные из публичных api.

const coinDeskData = JSON.parse(coinDesk);

// Задание 2
// 1. Создать файл index.html.
// 2. Подключить data.js.
// 3. Сформировать контент из данных (картинка загловок и параграф).
// 4. Добавить данный контент в вёрстку.
// 5. * Добавить стили при необходимости (по желанию).

const bodyEll = document.querySelector("body");

const divEll = document.createElement("div");
const timeEll = document.createElement("time");
const paragraphEll = document.createElement("p");
const headingEll = document.createElement("h3");
const listEll = document.createElement("ul");

divEll.classList.add("content");
timeEll.classList.add("content__time");
paragraphEll.classList.add("content__paragraph");
headingEll.classList.add("content__heading");
listEll.classList.add("content__list");

bodyEll.appendChild(divEll);
divEll.appendChild(timeEll);
divEll.appendChild(paragraphEll);
divEll.appendChild(headingEll);
divEll.appendChild(listEll);

timeEll.textContent = coinDeskData.time;
paragraphEll.textContent = coinDeskData.disclaimer;
headingEll.textContent = coinDeskData.chartName;

Object.values(coinDeskData.bpi).forEach((element) => {
  const linkEll = document.createElement("li");
  linkEll.classList.add("content__link");
  linkEll.textContent = `${element.code} : ${element.symbol} : ${element.rate} : ${element.description} : ${element.rate_float}`;
  listEll.append(linkEll);
});
