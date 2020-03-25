'use strict';

const myInput = document.querySelector("#validation-input");

console.log(myInput.dataset.length);

myInput.addEventListener('blur', actBlur);

function actBlur(e) {
    if (myInput.value.length > myInput.dataset.length) {
        myInput.classList.add("invalid");
    } else {
        myInput.classList.add("valid")
    };
}