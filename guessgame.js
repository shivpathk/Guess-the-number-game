let randomInt = parseInt(Math.random() * 100 + 1)
console.log(randomInt)

const submit = document.querySelector("#submit")
const userInt = document.querySelector("#userInput")
const prevGuess = document.querySelector(".prevGuess")
const remGuess = document.querySelector(".remGuess")
const lowOrHigh = document.querySelector(".lowOrHigh")
const startOver = document.querySelector(".last-text")
const pu = document.createElement("p")

let guessArr = []
let numGuess = 1;
let playGame = true;

if (playGame) {
    submit.addEventListener("click", (e) => {
        e.preventDefault()
        const guess = parseInt(userInt.value)
        validateGuess(guess)
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert(`Please enter a valid number`)
    }else if(guess>=100){
        alert(`Please enter a number less than 100`)
    }else if(guess<=0){
        alert(`Please enter a number greater than 0`)
    }
    else{
        guessArr.push(guess)
        if(numGuess===10 && guess != randomInt){
            displayGuess(guess)
            displayMessage(`Game Over. <br> Random number was ${randomInt}`)
            endGame()
        }else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess) {
    if(guess === randomInt){
        displayMessage(`Congratulation You Won!! <br> You Guessed it right in ${numGuess-1} attempts`)
        endGame()
    }else if(guess < randomInt){
        displayMessage(`Your Number is low`)
    }
    else if(guess > randomInt){
        displayMessage(`Your Number is high`)
    }
}

function displayGuess(guess) {
    userInt.value = ''
    prevGuess.innerHTML += `${guess}, `
    numGuess++;
    remGuess.innerHTML= `${11-numGuess}`
}

function displayMessage(message) {
    lowOrHigh.innerHTML = `<h2>${message}</h2>`
}

function endGame() {
    userInt.value = ''
    userInt.setAttribute('disabled','')
    pu.classList.add('button')
    pu.innerHTML = `<h2 id="newGame">Start New Game</h2>`
    startOver.appendChild(pu)
    playGame = false;
    newGame()
}
function newGame() {
const newGame = document.querySelector("#newGame");
newGame.addEventListener("click" , (e)=>{
    randomInt = parseInt(Math.random() * 100 + 1);
    console.log(randomInt)
    guessArr = []
    numGuess = 1;
    prevGuess.innerHTML = ''
    lowOrHigh.innerHTML = ''
    remGuess.innerHTML= `${11-numGuess}`
    userInt.removeAttribute('disabled')
    startOver.removeChild(pu)
    playGame = true;

})
}

