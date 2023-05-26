// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  let badges = '';
  switch(license){
    case 'nothing':
      return badges;
    case 'Unlicensed':
      return badges += '![The Unlicense](https://img.shields.io/badge/license-Unlicense-brightgreen.svg)';
    case 'GNU AGPLv3':
      return badges += '![GNU AGPLv3](https://img.shields.io/badge/license-GNU%20AGPLv3-green.svg)';
    case 'GNU GPLv3':
      return badges += '![GNU GPLv3](https://img.shields.io/badge/license-GNU%20GPLv3-yellowgreen.svg)';
    case 'GNU LGPLv3':
      return badges += '![GNU LGPLv3](https://img.shields.io/badge/license-GNU%20LGPLv3-yellow.svg)';
    case 'Mozilla Public License 2.0':
      return badges += '![Mozilla Public License 2.0](https://img.shields.io/badge/license-Mozilla%20Public%20License%202.0-orange.svg)';
    case 'Apache License 2.0':
      return badges += '![Apache License 2.0](https://img.shields.io/badge/license-Apache%20License%202.0-red.svg)';
    case 'MIT License':
      return badges += '![MIT License](https://img.shields.io/badge/license-MIT%20License-blue.svg)';
    case 'Boost Software License 1.0':
      return badges += '![Boost Software License 1.0](https://img.shields.io/badge/license-Boost%20Software%20License%201.0-lightgrey.svg)';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let markdown = `# ${data.title}`;
  if(data.description === true){
    markdown += `\n\n## Description\n\n`
    markdown += `* Motivation: ${data.motivation}\n`;
    markdown += `* Goal: ${data.goal}\n`;
    markdown += `* Problems Solved: ${data.problems}\n`;
    markdown += `* What I Learned: ${data.learned}\n`;
  }
  if(data.table === true){
    markdown += `\n\n## Table Of Contents\n\n`
    markdown += `* [Installations](#installations)\n`;
    markdown += `* [Usage](#usage)\n`;
    markdown += `* [Credits](#credits)\n`;
    markdown += `* [License](#license)\n`;
  }
  if(data.installation === true){
    markdown += `\n\n## Installation\n\n`
    markdown += `${data.installationContents}\n`
  }
  if(data.usage === true){
    markdown += `\n\n## Usage\n\n`
    markdown += `![${data.usageContent}](${data.usageContentTwo})`
  }
  if(data.credits === true){
    markdown += `\n\n## Credits\n\n`
    markdown += `${data.creditsContent}\n`
  }
  if(data.license === true){
    markdown += `\n\n## license\n\n`
    // if(data.licenseContent){

    // }
  }
  if(data.badges === true){
    markdown += `\n\n## Badges\n\n`
    // if(data.badgesContent){

    // }
  }
  if(data.feature === true){
    markdown += `\n\n## Feature\n\n`
    markdown += `${featureContent}\n`
  }
  if(data.contribute === true){
    markdown += `\n\n## How To Contribute\n\n`
    // if(data.contributeFeatures === 'Yourself'){

    // }
    // if(data.contributeFeatures === 'Contribute Covenant'){

    // }
  }
  if(data.tests === true){
    markdown += `\n\n## Tests\n\n`
    markdown += `${data.testsContent}`
  }
  if(data.links === true){
    markdown += `\n\n## Links\n\n`
    markdown += `${data.linksContent}\n`
  }
  if(data.screenshot === true){
    markdown += `\n\n## Screenshot\n\n`
    markdown += `![${data.screenshotContent}](${data.screenshotContentTwo})`
  }
  return markdown;
}
module.exports = generateMarkdown;
