//================ Task 1 ==============================

// Create a function (rollDice)
// Roll Two "dice" one for the player and one for the computer
// Use one variables for the (player) and one for the (computer)
// (use a random number from 1-6 to represent a dice)
// If the player's dice roll is higher than the computer dice roll,
// console.log("PLAYER WINS")
// otherwise, log ("COMPUTER WINS")
// Use a ternary to check for the winner
// ----- After testing it, remove the console.log()
// leaving just the string "PLAYER WINS" or "COMPUTER WINS" and save it to a variable (winner)
// FINALLY: return all three variables using an array
// return [VALUE1, VALUE2, VALUE3]


const rollDice = () => {
    let dicePlayer = Math.ceil(Math.random() * 6) //Math.ceil to avoid 0 || Math.floor()+1
    let diceComputer = Math.ceil(Math.random() * 6)
    console.log('Player:', dicePlayer);
    console.log('Computer:', diceComputer);
    const winner = (dicePlayer > diceComputer) ? "PLAYER WINS": (dicePlayer < diceComputer) ? "COMPUTER WINS": "TIE!"
    // let winner = '';
    //         if (dicePlayer > diceComputer){
    //             winner = 'Player Wins'
    //         } else if (dicePlayer === diceComputer){
    //             winner = 'Tied'
    //         } else {
    //             winner = 'Computer Wins'
    //         }

    return [dicePlayer, diceComputer, winner]
}

// ============ Task 2 ==============================
// Let's update our UI (User Interface)
// Create a function (displayScore)
// Create a new a div displaying:
// Computer Score: , Player Score:  & the Winner:
// so there is a running record of game data.
// Append the new div to the parent div on the HTML.
const parent = document.querySelector("#winner")

const displayScore = (results) => {
    // const results = rollDice()
    const div = document.createElement("div")
    div.innerHTML = `<p>Computer Score: ${results[1]},</p>
        <p>Player Score: ${results[0]},</p><p>Winner: ${results[2]}</p>` 
        //array from return[] of rollDice(), use innerHTML to use <p></p>
    parent.appendChild(div)
    console.log(div);
}

// Create a Reset Function (resetGame)
// REMOVE the div with the game score, leaving just the parent div
// creating a clean slate for a new set of games :)
const playBtn = document.querySelector('#play-game')
const resetBtn = document.querySelector('#reset')

const resetGame = () => {
    // console.log(document.querySelector('#winner').firstElementChild)
    document.querySelector('#winner').firstElementChild.remove()
  }

// ==== Final Step =====================
// Create a new function (playGame):
// Call the rollDice and the displayScore function inside this function

const playGame = () => {
    const results = rollDice() // gets the array
    displayScore(results)
  }

// ========= Don't forget to add your events listeners
// Attach the (playGame) function to the play game button
// Attach the (resetGame) function to the reset button
// ===== Now let's host this game in GITHUB PAGES and style it !!!

playBtn.addEventListener('click', playGame)
resetBtn.addEventListener('click', resetGame)

