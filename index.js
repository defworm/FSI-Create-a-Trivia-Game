// Your Code Here
let userName = window.prompt ('Please enter your name:')
let userScore = 0
let playAgain = true

function playGame(){
for(let i = 0; i < questions.length; i++) {
    let question = questions[i]
    let userAnswer = window.prompt(question.text)
if (userAnswer === question.correctAnswer){
    userScore = userScore + 10
    console.log('Correct')
    }
}
//this command will pop up a new window with score
window.alert ( `Your score is: ${userScore}`)
}
while (playAgain === true) {
playGame()
// I changed the yes and no to YES and NO since answers must be capitalized to count
let userChoice = window.prompt ('Would you like to play the game again? Answer YES or NO.')
if (userChoice === 'YES'){
    playAgain = true
} else {
    playAgain = false
    window.alert ('Thanks for playing the game!')
}
}