'use strict';
const createButton = document.querySelector('button[data-action="render"]');
const clearButton = document.querySelector('button[data-action="destroy"]');
const divsCountInput = document.querySelector('[name="amount"]');
const boxContainer = document.querySelector('#boxes');

//console.log(divsCount.value);

createButton.addEventListener('click', actCreate);
clearButton.addEventListener('click', actClear);

const divs = [];

function actCreate(){
    const amount = divsCountInput.value;
    createBoxes(amount);
}

function actClear(){
    boxContainer.textContent = null;
}

function createBoxes(amount){
    let fragment = document.createDocumentFragment();

    let width = 30;
    let height = 30;

    for (let index = 0; index < amount; index++) {
       
        let randomColor = Math.floor(Math.random()*16777215).toString(16);

        let newElement = document.createElement("div");
        newElement.style.background = '#' + randomColor;  
        newElement.style.height = height + "px";  
        newElement.style.width = width + "px";   
        fragment.appendChild(newElement);
        width += 10;
        height += 10;
    }

    boxContainer.appendChild(fragment);
}
