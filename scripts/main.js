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
    feedback.innerHTML = `¡HAS GANADO, CAMPEONA!🏆💃🏼`;
    input.value = 'FELICIDADES!🧙🍀'
    counter = 0;
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



//declaro y ejecuto evento
btn.addEventListener('click', checkUsernumber);