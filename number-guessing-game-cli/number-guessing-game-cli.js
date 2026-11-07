import readline from 'readline/promises'

const messageWelcome = () => {
    const message = "Welcome to the Number Guessing Game!\nI'm thinking of a number between 1 and 100.\nYou have 5 chances to guess the correct number.\n"
    console.log(message)
}

const dificultyLevelOptions = () => {
    const message = "Please select the difficulty level:\n1. Easy (10 chances)\n2. Medium (5 chances)\n3. Hard (3 chances)\n"
    console.log(message)
}

const options = (option) => {
    switch (option) {
        case 1:
            console.log("Great! You have selected the Easy difficulty level.")
            return 10
        case 2:
            console.log("Great! You have selected the Medium difficulty level.")
            return 5
        case 3:
            console.log("Great! You have selected the Hard difficulty level.")
            return 3
        default:
            console.log("Unknown option.")
            return -1
    }
}

const rl = readline.createInterface({ input: process.stdin, output: process.stdout })

const askDifficulty = async () => {
    let chances
    do {
        dificultyLevelOptions()
        const choice = parseInt(await rl.question('Enter your choice: '))
        chances = options(choice)
    } while (chances === -1)
    return chances
}

const askGuess = async () => {
    while (true) {
        const guess = parseInt(await rl.question('Enter your guess: '))
        if (Number.isInteger(guess) && guess >= 1 && guess <= 100) {
            return guess
        }
        console.log("Please enter a whole number between 1 and 100.")
    }
}

const playRound = async () => {
    const secretNumber = Math.floor(Math.random() * 100) + 1
    const chances = await askDifficulty()
    console.log("Let's start the game!")

    for (let attempt = 1; attempt <= chances; attempt++) {
        const guess = await askGuess()

        if (guess === secretNumber) {
            console.log(`Congratulations! You guessed the correct number in ${attempt} attempts.`)
            return
        }

        if (secretNumber > guess) {
            console.log(`Incorrect! The number is greater than ${guess}.`)
        } else {
            console.log(`Incorrect! The number is less than ${guess}.`)
        }
    }

    console.log(`You ran out of chances. The number was ${secretNumber}.`)
}

messageWelcome()

let playAgain
do {
    await playRound()
    const answer = await rl.question('Wanna play again (Y/N): ')
    playAgain = answer.trim().toUpperCase() === 'Y'
} while (playAgain)

rl.close()