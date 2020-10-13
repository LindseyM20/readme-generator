var inquirer = require("inquirer");
var fs = require("fs");
var path = require("path");
var generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
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
  type: "",
  message: "",
  name: ""
},
{
  type: "",
  message: "",
  name: ""
},
{
  type: "",
  message: "",
  name: ""
},
{
  type: "",
  message: "",
  name: ""
},
{
  type: "",
  message: "",
  name: ""
},
{
  type: "",
  message: "",
  name: ""
}
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
