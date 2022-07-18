//Packages needed for this application
const fs = require('fs');
var inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
//Array of questions that later create table of contents data to show
inquirer
  .prompt([
    {
      type: "input",
      name: "title",
      message: "what is the title of the project?"
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
    // Logging user feedback inside the README file
    console.log("attempting to write file:");
    writeToFile('./Generated-README.md', answers);
  })
  .catch((error) => {
    if (error.isTtyError) {
      throw new Error("TyError" + error.message);
    } else {
      throw new Error(error);
    }
  });

// Creates a README file
function writeToFile(fileName, data) {
  console.log(data);
 
  fs.writeFile(fileName, generateMarkdown(data), err => {
      if (err) {
        throw new Error(err);
      }
      console.log("the data");
      console.log(data);
  });
}
