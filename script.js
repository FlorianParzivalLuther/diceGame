'use strict';

//Selecting Elements
const score0Element = document.querySelector('#score--0');
const current1Element = document.getElementById('current--1')
const player0 = document.querySelector('.player--0');

const score1Element = document.getElementById('score--1'); //little bit faster!
const current0Element = document.getElementById('current--0');
const player1 = document.querySelector('.player--1');

const diceElement = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');


//starting conditions
score0Element.textContent=0;
score1Element.textContent=0;
diceElement.classList.add('hidden');


//counter!
const scores =[0,0];
let currentScore =0;
let activePlayer = 0;

const switchPlayer = function(){
    document.getElementById(`current--${activePlayer}`).textContent=0;
        activePlayer= activePlayer ===0 ? 1 : 0; // non-tenary: if activePlayer ===0 then change activePlayer to 1 else to 0!
        currentScore=0;
        player0.classList.toggle('player--active'); //adds and removes the class!
        player1.classList.toggle('player--active');
}

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
        document.getElementById(`current--${activePlayer}`).textContent=currentScore;
        
    }else{
        //switch players!
        // document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        // document.getElementById(`current--${activePlayer}`).textContent=0;
        // activePlayer= activePlayer ===0 ? 1 : 0; // non-tenary: if activePlayer ===0 then change activePlayer to 1 else to 0!
        // currentScore=0;
        // player0.classList.toggle('player--active'); //adds and removes the class!
        // player1.classList.toggle('player--active');
        switchPlayer();

        //possible as well like this !!!!
        // document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        // document.getElementById(`current--${activePlayer}`).textContent=0;
        // activePlayer= activePlayer ===0 ? 1 : 0; // non-tenary: if activePlayer ===0 then change activePlayer to 1 else to 0!
        // currentScore=0;
        // document.querySelector(`.player--${activePlayer}`).classList.add('player--active');

    }
   
})

btnHold.addEventListener('click',function(){
    console.log('hold button');
    //1.add current score to active players score
    scores[activePlayer]+= currentScore;
    // scores[1]=scores[1]+currentScore;
    document.getElementById(`score--${activePlayer}`).textContent=scores[activePlayer];

    if(scores[activePlayer]>=10){
        // console.log(`Player ${activePlayer+1} won!`);
        // location.reload();
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');

        // btnRoll.classList.add('hidden');
        // btnHold.classList.add('hidden');

        const buttonsHide = document.querySelectorAll('.btn--roll, .btn--hold');
        buttonsHide.forEach(function(button){
            button.classList.add('hidden');
        });

        // document.querySelector('.btn--roll').classList.add('hidden');
        // document.querySelector('.btn--hold').classList.add('hidden');

    }else{
        switchPlayer();
    }

    
})

btnNew.addEventListener('click',function(){
    location.reload();
})