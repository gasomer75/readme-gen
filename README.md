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
- To use this application you must have [node.js](https://nodejs.org/en/download/) installed on your device. (v 16.14.0 or newer is recommended)
- Next you must install the npm [inquirer](https://www.npmjs.com/package/inquirer) package (v 8.2.0 or newer). Use the following commands for this step: 

      npm init
      npm i inquirer

- After following these steps your application should be ready to execute.

## Usage
1. To initialize the prompts you must navigate using the command line to the folder containing the index.js file. 
2. Once in the correct folder use the command:

      node index.js
    
3. Answer all the prompts and if the file executed properly you will receive a confirmation statement that your ReadMe file was created successfully. 
4. To locate your newly generated file navigate to the `/dist` folder and locate the README.md file in that folder. This file is your newly generated ReadMe file. 
    - Note that if you run the application more than once, each time will overwrite the previous file. If you wish to save any copies, do so before running the application.

### Link to Walkthrough Video
[Watch Now](https://drive.google.com/file/d/1ol8UVRxhukai6cItNTqDsnJjr3nTThzV/view)

### Screenshot of Command Line Prompts
![Command Line Prompts](/assets/images/cl-screenshot.png)

### Example of Generated README File
    # The Perfect Pizza
    [![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)


    ## Description
    This is the recipe for the perfect pepperoni pizza. It was inspired by my love for pizza and being very hungry.

    ## Table of Contents

    - [Installation](#installation)
    - [Usage](#usage)
    - [Link](#link)
    - [Contributions](#contributions)
    - [Tests](#tests)
    - [License](#license)
    - [Questions](#questions)

    ## Installation
    The best way to install the pizza is to make sure it's cooked thoroughly and sliced in manageable pieces. Then insert into your mouth and enjoy.

    ## Usage
    Using this pizza should only be done by a professional. It takes years of experience to master this pizza.

    ![No screenshot available](./images/screenshot.jpg)

    ## Link
    To visit the latest deployed version please check out the link below.
    - https://myperfectpizza.com

    ## Contributions
    If  you would like to contribute to my perfect pizza please do. I am always looking for a more perfect version.

    ## Tests
    Don't test it. Just enjoy it.
    
    ## License
    Licensed under the [GPL-3.0](https://opensource.org/licenses/GPL-3.0) license.

    ## Questions
    - Visit my GitHub page:
      - *[GitHub Page](https://github.com/gasomer75)*
    - Send an email with the project name as the subject to:
      - *gasomer75@hotmail.com*

## Link
No deployment
  - Fork the repo and use the application on your device from the command line.

## Contributions
In order to contribute to this project you must first fork the repo and create your new branch from branch 
`main`. Once you have completed your addition/bug fix create an issue with a description of how your code will improve the project. Then submit a pull request for your code to be added to `main` and
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
