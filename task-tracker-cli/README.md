# Task Tracker

A CLI application for basic task management through the command line.

## Usage

node task-tracker-cli.js <command> [arguments]

Where `task-tracker-cli.js` is the application, `<command>` is the action to perform, followed by its parameters.

## Commands

node task-tracker-cli.js add "Clean House"

node task-tracker-cli.js list

node task-tracker-cli.js list done

node task-tracker-cli.js update 1 "New description"

node task-tracker-cli.js delete 1

node task-tracker-cli.js mark-in-progress 1

node task-tracker-cli.js mark-done 1

## Task structure

Each task has: id, description, status, createdAt, updatedAt

## Data storage

All tasks are saved in myTasks.json in the current directory.