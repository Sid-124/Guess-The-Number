"use strict";

//A function is just a value and we can pass another function as the argument

// Handling click events, {event is something that happens on the webpage

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;


document.querySelector('.check').addEventListener('click', function () {
    const guess = document.querySelector('.guess').value;
    console.log(guess);

    //if there is no number present in the box
    if (!guess) {
        document.querySelector('.message').textContent = "No Number!!";

        //when the player wins
    } else if (guess == secretNumber) {
        document.querySelector('.message').textContent = 'Correct Number!';
        document.querySelector('.number').textContent = secretNumber;
        //manipulate the css styles using DOM
        //whenever we are manupulating the style then we must specify in a String format
        document.querySelector('body').style.backgroundColor = '#60b347';
        //to change the width 
        document.querySelector('.number').style.width = '30rem';
        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }

        //when the guess is too high 
    } else if (guess > secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = 'Too High!!';
            score--;
            document.querySelector('.score').textContent = score;

            //when we lost the game 
        } else {
            document.querySelector('.message').textContent = 'You lost the game';
            document.querySelector('.score').textContent = 0;
            document.querySelector('body').style.backgroundColor = 'red';
        }
    
        //when the guess is too low
    } else if (score < secretNumber) {
        document.querySelector('.message').textContent = 'Too Low!!';
        score--;
    }
});

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    document.querySelector('.message').textContent = 'Start Guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
})
