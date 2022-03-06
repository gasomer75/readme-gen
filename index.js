// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'github',
    message: 'Enter your GitHub user name: ',
    validate: githubInput => {
      if (githubInput) {
        return true;
      } else {
        console.log('Please enter your GitHub user name to continue!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter an email address for people to contact you about this project: ',
    validate: emailInput => {
      if (emailInput) {
        return true;
      } else {
        console.log('Please enter an email address to continue!');
        return false;
      }
    }
  },
  {   
    type: 'input',
    name: 'title',
    message: 'Enter the title of your project: ',
    validate: titleInput => {
      if (titleInput) {
        return true;
      } else {
        console.log('Please enter a title to continue!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'description',
    message: 'Provide a description of your project: ',
    validate: descriptionInput => {
      if (descriptionInput) {
        return true;
      } else {
        console.log('Please enter a project description to continue!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'screenshot',
    message: 'Enter the file name of your screenshot (file must be in /dist/images/ folder): ',
    default: ''
  },
  {
    type: 'input',
    name: 'contributions',
    message: 'Provide guidelines for others to contribute to your project: ',
    validate: contributionsInput => {
      if (contributionsInput) {
        return true;
      } else {
        console.log('Please give contribution instructions to continue!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Provide instructions for installation of your project: ',
    validate: installationInput => {
      if (installationInput) {
        return true;
      } else {
        console.log('Please give installation requirements to continue!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'link',
    message: "Enter the url to your deployed application.(Press Enter to bypass): ",
    default: 'No deployment.'
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Provide usage instructions and examples: ',
    validate: usageInput => {
      if (usageInput) {
        return true;
      } else {
        console.log('Please give usage instructions to continue!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'testing',
    message: 'Provide any testing guidelines for this application: ',
    default: 'No testing guidelines at this time.'
  },
  {
    type: 'confirm',
    name: 'confirmLicense',
    message: 'Would you like to include a license for your project?',
    default: true
  },
  {
    type: 'list',
    name: 'license',
    message: 'Select a license for your project: ',
    choices: ['Apache-2.0', 'MIT', 'GPL-3.0', 'MPL-2.0', 'NONE'],
    when: ({confirmLicense}) => {
      if (confirmLicense) {
        return true;
      } else {
        return false;
      }
    }
  }
];


// TODO: Create a function to write README file
function writeToFile(dataInput) {
  return new Promise((resolve, reject) => {
    fs.writeFile('./dist/README.md', dataInput, err => {
      if (err) {
        reject(err);
        return;
      } 
      resolve({
        ok: true,
        message: 'README file created successfully.'
      });
    });
  });
};

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
    .then(answers => {
      return generateMarkdown(answers);
    })
    .then(markdownData => {
      return writeToFile(markdownData);
    })
    .then(writeFileMessage => {
      console.log(writeFileMessage.message);
    })
    .catch(err => {
      console.log(err);
    })
}

// Function call to initialize app
init();