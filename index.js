/**
 * all const variables equal to the function of require to grab values from either files/npms
 */
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
const questions = require("./utils/questions");

/**
 * This function writes the file based on the user input and also logs if there was an error
 * or not
 */
function writeToFile(fileName) {
  fs.writeFile("./codedREADME/README.md", fileName, (err) =>
    err ? console.log("error") : console.log("Success!")
  );
}
/**
 * function to initialize the program starts the question process
 */
function init() {
  inquirer.prompt(questions).then((data) => {
    console.log(data);

    const READMEPageContent = generateMarkdown(data);
    writeToFile(READMEPageContent);
  });
}
init();
