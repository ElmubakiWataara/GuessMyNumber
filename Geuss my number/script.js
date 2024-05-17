'use strict';


let secretNumber = (Math.trunc(Math.random()*20)+1);

let score = 20;
let highScore = 0;




//if check button is clicked!
document.querySelector('.check').addEventListener('click', function(){
const guess = Number(document.querySelector('.guess').value); 


//when no guess
if (!guess){
    document.querySelector('.message').textContent =  'No number';
    } 
    //when guess is correct
    else if (guess === secretNumber) {
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('.message').textContent =  'Correct Number';
        document.querySelector('body').style.backgroundColor = 'green';
        document.querySelector('.number').style.width = '30rem';

        
        if (score > highScore){
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
        


    } 
    //when guess is greater than secret number
    else if (guess > secretNumber){
        if (score > 1) {
            document.querySelector('.message').textContent =  'Too high';
            score--;
            document.querySelector('.score').textContent = score;
        }
        else {
            document.querySelector('.message').textContent =  'You have lost the game!'
            document.querySelector('.score').textContent = 0;
            document.querySelector('body').style.backgroundColor = 'red';
            }
    }
    //when duess is less than secret number
    else if (guess < secretNumber){
        if (score > 1) {
            document.querySelector('.message').textContent =  'Too low';
            score--;
            document.querySelector('.score').textContent = score;
        }
        else {
            document.querySelector('.message').textContent =  'You have lost the game!'
            document.querySelector('.score').textContent = 0;
            document.querySelector('body').style.backgroundColor = 'red';
            }
    }
});
//if again button is clicked!
document.querySelector('.again').addEventListener('click', function(){
    score = 20;
    secretNumber = (Math.trunc(Math.random()* 20)+1);

    
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.guess').value = '';
    // score = 20;
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';


    document.querySelector('.number').style.width = '15rem';
    document.querySelector('body').style.backgroundColor = '#222';
})