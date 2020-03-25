'use strict';

const categories = document.querySelectorAll("#categories .item");

for (let i = 0; i < categories.length; i++) {
    const element = categories[i];
    const title = element.querySelector("h2");
    console.log(`Категория: ${title.textContent};`);
    const quantity = element.querySelectorAll("li");
    console.log(`Количество элементов: ${quantity.length};`);
}