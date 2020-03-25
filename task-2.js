'use strict';

const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

let ingredientsContainer = document.querySelector('#ingredients');



let fragment = document.createDocumentFragment();

  ingredients.forEach(ingredient => {
     let newElement = document.createElement("li");
     newElement.textContent = ingredient;
     fragment.appendChild(newElement);
  });

ingredientsContainer.appendChild(fragment);
