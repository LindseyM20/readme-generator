const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");

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
}
// {
//   type: "",
//   message: "",
//   name: ""
// },
// {
//   type: "",
//   message: "",
//   name: ""
// },
// {
//   type: "",
//   message: "",
//   name: ""
// },
// {
//   type: "",
//   message: "",
//   name: ""
// },
// {
//   type: "",
//   message: "",
//   name: ""
// },
// {
//   type: "",
//   message: "",
//   name: ""
// }
];

// function to write README file
function writeToFile(fileName, data) {
  // try arrow function and ternary operator
  fs.writeFile(fileName, data, function (error) {
    if (error) {
      return console.log(error);
    } else {
      console.log("Readme written!");
    }
  });
}



// function to initialize program
function init() {

  inquirer
  .prompt(questions)
  .then((userAnswers) => {
    writeToFile("README.md", generateMarkdown({...userAnswers}));
  })

}

// function call to initialize program
init();
