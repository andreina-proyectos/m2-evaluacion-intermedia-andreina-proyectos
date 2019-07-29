'use strict';
//añado todas mis variables
const counter = document.querySelector('.counter');
const input = document.querySelector('.input-game');
const btn = document.querySelector('.btn');
const feedback = document.querySelector('.feedback');
let userNumber = input.value;

//declaro funcion de random number
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}
//ejecuto funcion de random number
let winnerNumber = getRandomNumber(100);
console.log(winnerNumber);

function checkUsernumber () {

  if (userNumber === winnerNumber) {
    feedback.innerHTML = `¡HAS GANADO, CAMPEONA!`;
  }

  else if (userNumber > winnerNumber) {
    feedback.innerHTML = `demasiado alto`;
  }

  else  {
    feedback.innerHTML = `demasiado bajo`;
  }
}

//declaro y ejecuto evento
btn.addEventListener('click', checkUsernumber)


