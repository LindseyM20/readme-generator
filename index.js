const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
  {
    type: "input",
    message: "Please enter your email address",
    name: "email"
  },
  {
    type: "input",
    message: "What is your GitHub username?",
    name: "github"
  },
  {
    type: "input",
    message: "What's the title of your project?",
    name: "title"
  },
  {
    type: "input",
    message: "Please type a description for your project",
    name: "description"
  },
  {
    type: "input",
    message: "What commands should be run to install dependencies?",
    name: "installation",
    default: "npm i"
  },
  {
    type: "input",
    message: "What usage information would you like to provide?",
    name: "usage"
  },
  {
    type: "input",
    message: "What contribution guidelines would you like to provide?",
    name: "contributing"
  },
  {
    type: "input",
    message: "What commands can be run to test your program?",
    name: "test",
    default: "npm test"
  },
  {
    type: "list",
    message: "Which license, if any, would you like to use?",
    name: "license",
    choices: ["APACHE 2.0", "MIT", "GPL 3.0", "BSD 3", "Unlicense", "None"]
  }
];

// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (error) => error ? console.log(error) : console.log("Readme written!"))
}



// function to initialize program
function init() {

  inquirer
    .prompt(questions)
    .then((userAnswers) => {
      writeToFile("README.md", generateMarkdown({ ...userAnswers }));
    })

}

// function call to initialize program
init();
