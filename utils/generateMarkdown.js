/**
 * funtion for the license badge, used a switch stament out of easa and it looks much cleaner then a bunch of if statements
 * depending on what badge you choose it will pick and then later display the proper badge choosen
 */
function renderLicenseBadge(license) {

  let badges = '';
  switch(license){
    case 'nothing':
      return badges;
    case 'Unlicensed':
      return badges += '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)';
    case 'GNU AGPLv3':
      return badges += '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)';
    case 'GNU GPLv3':
      return badges += '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
    case 'GNU LGPLv3':
      return badges += '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)';
    case 'Mozilla Public License 2.0':
      return badges += '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
    case 'Apache License 2.0':
      return badges += '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    case 'MIT License':
      return badges += '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    case 'Boost Software License 1.0':
      return badges += '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)';
  }
}
/**
 * function for the license link, once again used a switch statement for the same reason as stated before will give the user 
 * the link based on the value they choose for there license
 */
function renderLicenseLink(license) {

  let links = ''
  switch (license){
    case 'nothing':
      return links;
    case 'Unlicensed':
      return links += '[Unlicensed](https://choosealicense.com/licenses/unlicense/)';
    case 'GNU AGPLv3':
      return links += '[GNU AGPLv3](https://choosealicense.com/licenses/agpl-3.0/)';
    case 'GNU GPLv3':
      return links += '[GNU GPLv3](https://choosealicense.com/licenses/gpl-3.0/)';
    case 'GNU LGPLv3':
      return links += '[GNU LGPLv3](https://choosealicense.com/licenses/lgpl-3.0/)';
    case 'Mozilla Public License 2.0':
      return links += '[Mozilla Public License 2.0 Link](https://choosealicense.com/licenses/mpl-2.0/)';
    case 'Apache License 2.0':
      return links += '[Apache License 2.0](https://choosealicense.com/licenses/apache-2.0/)';
    case 'MIT License':
      return links += '[MIT License](https://choosealicense.com/licenses/mit/)';
    case 'Boost Software License 1.0':
      return links += '[Boost Software License 1.0](https://choosealicense.com/licenses/bsl-1.0/)';
  }
}

/**
 * this functions gets the license information based on the switrch statement aboove and returns it to the markdown function
 */
function renderLicenseSection(license) {

  const link = renderLicenseLink(license);
let markdown = '';
  markdown += `\n\n## license\n\n`
  markdown += `This program is done under the license: ${link}`;
return markdown;
}

/**
 * function to generate the README had to slightly adjust the starter code due to the fact I used a lot of confirms and the
 * if statements did not agree with the return statment being at the start.  Basically this function will generate the README
 * based on the input of the user and will also display it in proper format
 */
function generateMarkdown(data) {
  let markdown = `# ${data.title}`;
  let licenseSection = renderLicenseBadge(data.badges)
  if(data.badges === true){
    markdown += `\n\n## Badges\n\n`
    markdown += renderLicenseBadge(data.licenseContent);
  }
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
   markdown += renderLicenseSection(data.licenseContent);
  }
  if(data.feature === true){
    markdown += `\n\n## Feature\n\n`
    markdown += `${data.featureContent}\n`
  }
  if(data.contribute === true){
    markdown += `\n\n## How To Contribute\n\n`
    if(data.contributeFeatures === 'Yourself'){
      markdown += `${data.yourself}\n`
    }
    else{
      markdown += `[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](code_of_conduct.md)\n`
    }
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
/**
 * used to export the generateMarkdown function to the index.js page
 */
module.exports = generateMarkdown;
