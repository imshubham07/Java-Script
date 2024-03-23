let randomNumber = parseInt(Math.random() * 100 + 1)

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuess = []
let numGuess = 1

let playGame = true

if (playGame) {
    submit.addEventListener('click',function(event){
        event.preventDefault() 
        const guess = parseInt(userInput.value)
        console.log(guess);
        validateGuess(guess)
    })
}


function validateGuess(guess){
    // cheak user give corect value
    if (isNaN(guess)) {
        alert('Plese enter Vaild number')
    }  
    else if (guess<1) {
        alert('Please enter a Number More than 1')
    }else if (guess>100) {
        alert('Please Enter a number less than 100')
    }else{
        prevGuess.push(guess)
        if (numGuess === 10) {
            displayGuess(guess)
            displayMessage(`Game Over. Random number was ${randomNumber} `)
            endGame()
        }else{
            displayGuess(guess)
            cheakGuess(guess)
        }
    }

}

function cheakGuess(guess){
    if (guess === randomNumber) {
        displayMessage('You Guessed it right ')
        endGame();
    }else if (guess < randomNumber) {
        displayMessage('Number is too High')
    }else if (guess > randomNumber) {
        displayMessage('Number is too Low')
    }
}

function displayGuess(guess){
    userInput.value = ''
    guessSlot.innerHTML += `${guess} , `;
    numGuess++;
    remaining.innerHTML = `${10 - numGuess}`;
}

function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
}
 
function endGame(){
    userInput.value = '';
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id = "newGame" > Start new Game</h2>`
    startOver.appendChild(p)
    playGame = false
    newGame()
}

function newGame(){
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', function(event){
        randomNumber = parseInt(Math.random() * 100 + 1) 
        prevGuess = []
        numGuess = 1
        guessSlot.innerHTML = ' '
        remaining.innerHTML = `${10 - numGuess}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p)
        
        playGame = true
    })

}