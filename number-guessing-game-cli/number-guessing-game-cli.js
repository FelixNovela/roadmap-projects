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

let num = Math.ceil(Math.random() * 100)
const numberGuess = (numberGuessed) => {
    console.log(num)
    if (numberGuessed >= 0 && numberGuessed <= 100) {
        if (num === numberGuessed) {
            console.log("Congratulations! You guessed the correct number")
            return 1
        } else {
            if (num > numberGuessed) {
                console.log(`Incorrect! The number is greater than ${numberGuessed}.`)
                return 0
            } else {
                console.log(`Incorrect! The number is less than ${numberGuessed}.`)
                return 0
            }
        }
    }
    return `${numberGuessed} is out of range`
}
messageWelcome()


const rl = readline.createInterface({ input: process.stdin, output: process.stdout })

let chances
const t = async () => {

    do {
        dificultyLevelOptions()
        const choice = parseInt(await rl.question('Enter your choice: '))

        chances = options(choice)
    } while (chances === -1);
}

await t()

const verify = async () => {
   
        let tryAgain = await rl.question('Wanna try again(Y/N): ')
        if (tryAgain.toUpperCase() === 'Y') {
            await t()
            contador = 1
            num = Math.ceil(Math.random() * 100)
        }
    
}

let contador = 1
while (contador <= chances) {
    let guess = parseInt(await rl.question('Enter your guess: '))
    if (numberGuess(guess)) {
        console.log(`Congratulations! You guessed the correct number in ${contador} attempts.`)
        break
    }
    contador++
    if(contador > chances && !numberGuess(guess)){
        await verify(guess)
    }
    

}







