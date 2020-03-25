"use strict";

const myInput = document.querySelector("#name-input");
const myOutput = document.querySelector("#name-output");
console.log(myInput);
console.log(myOutput);

myInput.addEventListener('input', actInput);

function actInput(e) {
    console.log(myInput.value);
    myOutput.textContent = myInput.value;

    if (!myOutput.textContent){
        myOutput.textContent=`незнакомец`;
    }
}

    