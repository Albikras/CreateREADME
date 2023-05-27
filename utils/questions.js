/**
 * There were to many questions so i placed them within there own file to keep my code looking
 * clean. This is the questions array where the the questions that will be asked to the user
 * are displayed in there code here
 */
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your application",
  },
  {
    type: "confirm",
    name: "description",
    message: "do you want to include a description for your README",
  },
  {
    type: "input",
    name: "motivation",
    message: "What was your motivation?",
    when: (answers) => answers.description === true,
  },
  {
    type: "input",
    name: "goal",
    message: "Why did you build this project?",
    when: (answers) => answers.description === true,
  },
  {
    type: "input",
    name: "problems",
    message: "What Problems does it solve?",
    when: (answers) => answers.description === true,
  },
  {
    type: "input",
    name: "learned",
    message: "What did you Learn?",
    when: (answers) => answers.description === true,
  },
  {
    type: "confirm",
    name: "table",
    message: "Did you want to include a table of Contents for your README",
  },
  {
    type: "confirm",
    name: "installation",
    message: "Did you want an Installations section for your README?",
  },
  {
    type: "input",
    name: "installationContents",
    message: "Enter the steps required to install your README",
    when: (answers) => answers.installation === true,
  },
  {
    type: "confirm",
    name: "usage",
    message: "Did you want to include a usage protion for your README",
  },
  {
    type: "input",
    name: "usageContent",
    message: "Enter alt text for image here",
    when: (answers) => answers.usage === true,
  },
  {
    type: "input",
    name: "usageContentTwo",
    message: "Enter screenshot path ex. assets/images/screenshot.png",
    when: (answers) => answers.usage === true,
  },
  {
    type: "confirm",
    name: "credits",
    message: "Did you want to included a credits portion in your README",
  },
  {
    type: "input",
    name: "creditsContent",
    message:
      "Enter your collaborators, add there github links, if there are none just write N/A",
    when: (answers) => answers.credits === true,
  },
  {
    type: "confirm",
    name: "license",
    message: "Did you want to include a License portion for your README",
  },
  {
    type: "list",
    name: "licenseContent",
    message: "What License did you use? (Use Arrow Keys)",
    choices: [
      "nothing",
      "Unlicensed",
      "GNU AGPLv3",
      "GNU GPLv3",
      "GNU LGPLv3",
      "Mozilla Public License 2.0",
      "Apache License 2.0",
      "MIT License",
      "Boost Software License 1.0",
    ],
    when: (answers) => answers.license === true,
  },
  {
    type: "confirm",
    name: "badges",
    message: "Did you want to included Badges in your README",
  },
  {
    type: "confirm",
    name: "feature",
    message: "Did you want to include features in your README",
  },
  {
    type: "input",
    name: "featureContent",
    message: "Enter your features here",
    when: (answers) => answers.feature === true,
  },
  {
    type: "confirm",
    name: "contribute",
    message:
      "Did you want to include a how to contribute portion for your README",
  },
  {
    type: "list",
    name: "contributeFeatures",
    message:
      "How did you want to do your How to contribute by yourself of through the Contribute Covenant?(Use the arrow keys)",
    choices: ["Yourself", "Contribute Covenant"],
    when: (answers) => answers.contribute === true,
  },
  {
    type: "input",
    name: "yourself",
    messsage: "Enter your how to contribute here",
    when: (answers) => answers.contributeFeatures === "Yourself",
  },
  {
    type: "confirm",
    name: "tests",
    message: "Did you want to include a tests portion for your README",
  },
  {
    type: "input",
    name: "testsContent",
    message: "Write how to test you program here",
    when: (answers) => answers.tests === true,
  },
  {
    type: "confirm",
    name: "quest",
    message: "Did you want to add a Questions section for your README",
  },
  {
    type: "input",
    name: "questContent",
    message: "Please enter your Github here",
    when: (answers) => answers.quest === true,
  },
  {
    type: "input",
    name: "questContentTwo",
    message: "Please your Email here",
    when: (answers) => answers.quest === true,
  },
  {
    type: "confirm",
    name: "links",
    message: "Did you want to include links in your README",
  },
  {
    type: "input",
    name: "linksContent",
    message:
      "Enter your links here(remember its right click in the terminal for paste)",
    when: (answers) => answers.links === true,
  },
  {
    type: "confirm",
    name: "screenshot",
    message: "Did you want to include screenshots in your README",
  },
  {
    type: "input",
    name: "screenshotContent",
    message: "Enter your screenshot alt text here",
    when: (answers) => answers.screenshot === true,
  },
  {
    type: "input",
    name: "screenshotContentTwo",
    message:
      "Enter your screenshot image path here ex. assets/images/screenshot.png",
    when: (answers) => answers.screenshot === true,
  },
];

/**
 * used to export this file to another file/javascript
 */
module.exports = questions;
