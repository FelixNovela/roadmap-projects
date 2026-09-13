# Expense Tracker

A CLI application for basic expense tracker management through the command line.

## Usage

node expense-tracker-cli.js <command> [arguments]

Where `expense-tracker-cli.js` is the application, `<command>` is the action to perform, followed by its parameters.

## Commands

```bash
node expense-tracker-cli.js add "Lunch" 200
node expense-tracker-cli.js list
node expense-tracker-cli.js update 1 "New Description" 100
node expense-tracker-cli.js delete 1
node expense-tracker-cli.js summary
node expense-tracker-cli.js summaryMonth 9
```

## Expense structure

Each expense has: id, date, description, amount

## Data storage

All expenses are saved in myExpensesList.json in the current directory.

## Project

This project is based on the [Expense Tracker](https://roadmap.sh/projects/expense-tracker) project from roadmap.sh's Backend Projects list.