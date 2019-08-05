'use strict';
//añado todas mis variables
const counter__game = document.querySelector('.counter');
const input = document.querySelector('.input-game');
const btn = document.querySelector('.btn');
const feedback = document.querySelector('.feedback');

let counter = 0;

//declaro funcion de random number
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}
//ejecuto funcion de random number
let winnerNumber = getRandomNumber(100);
console.log(winnerNumber);


const checkUsernumber = () => {
  let userNumber = parseInt(input.value);
  if (userNumber === winnerNumber) {
    feedback.innerHTML = `¡HAS GANADO, CAMPEONA!`;
    counter=0;
  }

  else if (userNumber > winnerNumber) {
    feedback.innerHTML = `demasiado alto`;
    if (counter>4) {
      counter = 0;
    }
    counter = counter+1;
    counter__game.innerHTML =counter;
  }

  else  {
    feedback.innerHTML = `demasiado bajo`;
    if (counter>4) {
      counter = 0;
    }
    counter = counter+1;
    counter__game.innerHTML =counter;
  }
}

//declaro y ejecuto evento
btn.addEventListener('click', checkUsernumber)


