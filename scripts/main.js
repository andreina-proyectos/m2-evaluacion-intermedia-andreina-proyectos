'use strict';
//añado todas mis variables
const counter__game = document.querySelector('.counter');
const input = document.querySelector('.input-game');
const btn = document.querySelector('.btn');
const feedback = document.querySelector('.feedback');
const resetButton = document.querySelector('.reset-btn'); 

let counter = 0;

//declaro funcion de random number
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}
//ejecuto funcion de random number
let winnerNumber = getRandomNumber(100);
console.log(winnerNumber);


const checkUsernumber = () => {
  if (input.value === '') {
    feedback.innerHTML = `⚠️ Debes poner un número! ️️⚠️`;  
  }

  else {
  let userNumber = parseInt(input.value);
  if (userNumber === winnerNumber) {
    feedback.innerHTML = `¡HAS GANADO, CAMPEONA!🏆💃🏼`;
    input.value = 'FELICIDADES!🧙🍀'
    counter = 0;
    counter__game.innerHTML = counter;
  }

  else if (userNumber > winnerNumber) {
    feedback.innerHTML = `demasiado alto! 😎`;
    if (counter>4) {
      feedback.innerHTML = `INTENTALO DE NUEVO!👆🏼`
      counter = 0;
      input.value = '';
      input.placeholder = 'otra vez!';
    }
    else {counter = counter+1;}
    counter__game.innerHTML =counter;
  }

  else  {
    feedback.innerHTML = `demasiado bajo! 😱`;
    if (counter>4) {
      feedback.innerHTML = `INTENTALO DE NUEVO!👆🏼`
      counter = 0;
      input.value = '';
      input.placeholder = 'otra vez!';

    }
    else {counter = counter+1;}
    counter__game.innerHTML =counter;
  }

  if (userNumber > 100 || userNumber < 0) {
    feedback.innerHTML = `El numero debe ser entre 0 y 100!🖖🏼`
  }
}
}

function handlerResetAll () {
  counter = 0;
  counter__game.innerHTML = counter;
  input.value = '';
  feedback.innerHTML = `Escribe un número y dale a Prueba`;
  winnerNumber = getRandomNumber(100);
  console.log(winnerNumber);
}

function handlerEnterKey (event) {
  if (event.keyCode === 13) {
    checkUsernumber();
   }
}

btn.addEventListener('click', checkUsernumber);
resetButton.addEventListener ('click', handlerResetAll);
input.addEventListener('keyup', handlerEnterKey);