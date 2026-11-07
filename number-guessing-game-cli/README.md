# Number Guessing Game

A CLI game where the computer picks a random number between 1 and 100 and the player has to guess it within a limited number of chances.

## Usage

node number-guessing-game-cli.js

Run the command and follow the prompts in the terminal. No arguments are needed.

## How to play

```bash
node number-guessing-game-cli.js
```

1. Select a difficulty level by typing its number.
2. Enter your guesses, one at a time.
3. After each wrong guess, the game tells you if the number is greater or less than your guess.
4. The game ends when you guess the number or run out of chances.
5. At the end of each round, you can choose to play again (Y/N).

## Difficulty levels

- Easy: 10 chances
- Medium: 5 chances
- Hard: 3 chances

## Input validation

Guesses must be whole numbers between 1 and 100. Invalid input asks again without using a chance.

## Project

This project is based on the [Number Guessing Game](https://roadmap.sh/projects/number-guessing-game) project from roadmap.sh's Backend Projects list.