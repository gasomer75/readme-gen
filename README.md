# Professional ReadMe File Generator
[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

## Table Of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Link](#link)
- [Contributions](#contributions)
- [Testing](#testing)
- [License](#license)
- [Questions](#questions)

## Description

- This application was designed to simplify creating ReadMe files by using a command line interface where question prompts allow user input into fields that generally appear in a professional ReadMe.md file. The input is collected and then used to complete the template and generate a ReadMe file.
- The template used contains the main sections that are typically included in a ReadMe file. It's basic design is what makes it simple and appealing. However, there may be sections that a user wishes to include in their ReadMe file that are not part of this template.

## Installation
- To use this application you must have node.js installed on your device. (v 16.14.0 or newer is recommended)
- Next you must install the npm inquirer package (v 8.2.0 or newer). Use the following commands for this step: 

      npm init
      npm i inquirer

After following these steps your application should be ready to execute.

## Usage
- To initialize the prompts you must navigate using the command line to the folder containing the index.js file. 
- Once in the correct folder use the command:

      node index.js
    
- Answer all the prompts and if the file executed properly you will receive a confirmation statement that your ReadMe file was created successfully. 
- To locate your newly generated file navigate to the <mark >**/dist**</mark> folder and locate the README.md file in that folder. This file is your newly generated ReadMe file. 
  - Note that if you run the application more than once, each time will overwrite the previous file. If you wish to save any copies, do so before running the application.

### Screenshot of Command Line Prompts
![Command Line Prompts](/assets/images/cl-screenshot.png)

### Screenshot of Generated README File
![ReadMe File](/assets/images/rm-screenshot.png)

## Link
No deployment
  - Fork the repo and use the application on your device from the command line.

## Contributions
In order to contribute to this project you must first fork the repo and create your new branch from branch 
<mark >**main**</mark>. Once you have completed your addition/bug fix create an issue with a description of how your code will improve the project. Then submit a pull request for your code to be added to <mark >**main**</mark> and
it will be reviewed. Be sure to include any contact information so that we may address any questions that arise to the proper source.

## Testing
No testing guidelines at this time.

## License
Licensed under the [GPL-3.0](https://opensource.org/licenses/GPL-3.0) license.

## Questions
For question or comments about this project please use the following contact sources:
- Visit my GitHub page:
  - *[GitHub Page](https://github.com/gasomer75)*
- Send an email with the project name as the subject to:
  - *gasomer75@hotmail.com*