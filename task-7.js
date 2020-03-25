'use strict';

const myInput = document.querySelector("#font-size-control");
const myText = document.querySelector("#text");


myInput.addEventListener('input', changer);

function changer() {
    myText.style.fontSize=myInput.value + 'px';
}