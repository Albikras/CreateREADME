/**
 * all const variables equal to the function of require to grab values from either files/npms
 */
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const questions = require('./utils/questions')

/**
 * function to initialize the program starts the question process then after writes the 
 * README file based on users answers
 */
function init(){
    inquirer
        .prompt(questions).then((data) =>{
            
            console.log(data);

            const READMEPageContent = generateMarkdown(data);

            fs.writeFile('README.md', READMEPageContent, (err)=>
            err ? console.log('error') : console.log('Success!'))
        })
}
init();