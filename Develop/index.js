// TODO: Include packages needed for this application


var inquirer = require('inquirer');
inquirer
  .prompt([
    {
      type: "input",
      name: "title",
      message: "what is the name of the project?"
    },
    {
      type: "input",
      name: "description",
      message: "what is the description of the project?"
    },
    {
      type: "input",
      name: "installationInstructions",
      message: "what is the installation instructions of the project?"
    },
    {
      type: "input",
      name: "usageInformation",
      message: "what is the usage information of the project?"
    },
    {
      type: "input",
      name: "contributionGuidelines",
      message: "what is the contribution guidelines of the project?"
    },
    {
      type: "input",
      name: "testInstructions",
      message: "what is the test instructions of this project?"
    },
    {
      type: "list",
      name: "license",
      message: "what is the license of the project?",
      choices: ["mit", "unlicensed", "gpl", "no license"]
    },
    {
      type: "input",
      name: "username",
      message: "what is the username of the project?"
    },
    {
      type: "input",
      name: "emailAddress",
      message: "what is the email address of this project?"
    }
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
  
// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
