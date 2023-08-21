'use strict';

//Selecting Elements
const score0Element = document.querySelector('#score--0');
const current1Element = document.getElementById('current--1')

const score1Element = document.getElementById('score--1'); //little bit faster!
const current0Element = document.getElementById('current--0');

const diceElement = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');


//starting conditions
score0Element.textContent=0;
score1Element.textContent=0;
diceElement.classList.add('hidden');


//
let currentScore =0;



//rolling dice function
btnRoll.addEventListener('click',function(){
   

   //1.generating random diceRoll
   const dice=  Math.trunc(Math.random()*6)+1;
   console.log(dice);
   //2.display dice
   diceElement.classList.remove('hidden');
   diceElement.src = `dice-${dice}.png`;
   //3.checkrolled if true, switch player
    if(dice!==1){
        //add dice to current score
        currentScore+=dice;
        current0Element.textContent=currentScore; //change later!

    }else{
        //switch players!
    }

})

