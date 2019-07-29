'use strict';
//añado todas mis variables
const counter__game = document.querySelector('.counter');
const input = document.querySelector('.input-game');
const btn = document.querySelector('.btn');
const feedback = document.querySelector('.feedback');

let counter = 0


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
  }

  else if (userNumber > winnerNumber) {
    feedback.innerHTML = `demasiado alto`;
    counter+=1;
    counter__game.innerHTML =counter;
  }

  else  {
    feedback.innerHTML = `demasiado bajo`;
    counter+=1;
    counter__game.innerHTML =counter;
  }
  counter = counter + 1;

}

//declaro y ejecuto evento
btn.addEventListener('click', checkUsernumber)


