"use strict";

const firstValue = document.querySelector('#value');

const myIncrement = document.querySelector('button[data-action="increment"]');
const myDecrement = document.querySelector('button[data-action="decrement"]');

console.log(myIncrement);
console.log(myDecrement);

myIncrement.addEventListener('click', actIncrement);

function actIncrement(e) {
    firstValue.textContent = Number(firstValue.textContent) + 1;
}

myDecrement.addEventListener('click', actDecrement);

function actDecrement(e) {

    firstValue.textContent = Number(firstValue.textContent) - 1;
}