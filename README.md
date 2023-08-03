# Clean Todo

A kanban style todo app have 3 default boards(Todo, Doing, Done) and more can be added by user. It also supports tagging tasks and setting deadlines.

## Setup Project

Make sure you have the latest version of angular-cli installed then, run the following commands in order:

```bash
git clone clean-todo
cd clean-todo
npm i
ng s
```

## Commit Guide

commits in this project start with different phrases based on the work done inside them:

- Add: Adding a new npm package to the project
- Feat: Adding a new feature or functionality to application
- Cheat: Updating or improving a piece of application
- Fix: Fixing a bug or ui/ux issue of application

## Architecture

This application uses the clean architecture introduced by uncle bob with some slight modifications. The project consists of diffrent layers:

- App: The presentation layer containing components, directives, pipes, routing, ... and cal have refrences to all other layers of the application
- Core: The business logic of the application goes here contains usecases, repository implementations and models used in application, can't refrence any other layer
- Remote: Contains all of the api related stuff of application such as dtos and remote repositories and services can refrence the core layer
- Data: Used for intracting with localStorage, cookies, indexedDB if needed, contains local repository implementations, local dtos and can only refrence the core layer

## Styling

The Application uses tailwind and angular material for ui. The application has two rules for writing styles:

1. **No custom css allowed**, only use tailwind utility classes with @apply directive
2. **No code allowed in components stylesheet**

We put all of out styles in `src/styles` directory which consists of diffrent sub-directories:

- `components`: If a set of tailwind classes where too repetative (ex. primary button) then we make a stylesheet for it in `src/styles/components` directory and define the styles we need (by considering rule number 1)

- `vendor`: Used for making modification in third party libraries styles
