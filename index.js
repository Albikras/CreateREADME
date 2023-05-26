const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const questions = require('./utils/questions')

 
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