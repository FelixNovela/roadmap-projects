import readline from 'readline/promises'

const messageWelcome = () => {
    const message = "Welcome to the Number Guessing Game!\nI'm thinking of a number between 1 and 100.\nYou have 5 chances to guess the correct number.\n"
    console.log(message)
}

const dificultyLevelOptions = () => {
    const message = "Please select the difficulty level:\n1. Easy (10 chances)\n2. Medium (5 chances)\n3. Hard (3 chances)\n"
    console.log(message)
}
messageWelcome()
dificultyLevelOptions()

const rl = readline.createInterface({ input: process.stdin, output: process.stdout })

const choice = parseInt(await rl.question('Enter your choice: '))
switch (choice) {
    case 1:
        console.log("Great! You have selected the Easy difficulty level.")
        break;
    case 2:
        console.log("Great! You have selected the Medium difficulty level.")
        break;
    case 3:
        console.log("Great! You have selected the Hard difficulty level.")
        break;
    default:
        console.log("Unknown option.")
        break;
}
console.log(`Guessed: ${choice}`);