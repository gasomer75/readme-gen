// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'Apache-2.0') {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  } 
  else if (license === 'MIT') {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  }
  else if (license === 'GPL-3.0') {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
  }
  else if (license === 'MPL-2.0') {
    return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'Apache-2.0') {
    return `[Apache-2.0](https://opensource.org/licenses/Apache-2.0)`
  }
  else if (license === 'MIT') {
    return `[MIT](https://opensource.org/licenses/MIT)`
  }
  else if (license === 'GPL-3.0') {
    return `[GPL-3.0](https://opensource.org/licenses/GPL-3.0)`
  }
  else if (license === 'MPL-2.0') {
    return `[MPL-2.0](https://opensource.org/licenses/MPL-2.0)`
  } else {
    return '';
  }
}

// Add Table of Contents link if a license is chosen otherwise will omit license section
function licenseTOC(license) {
  if (license) {
    return `- [License](#license)`
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return '';
  } else {
    return `License
Licensed under the ${renderLicenseLink(license)} license.`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}
${renderLicenseBadge(data.license)}


## Description
${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Link](#link)
- [Contributions](#contributions)
- [Tests](#tests)
${licenseTOC(data.license)}
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

![No screenshot available](./images/${data.screenshot})

## Link
To visit the latest deployed version please check out the link below.
- ${data.link}

## Contributions
${data.contributions}

## Tests
${data.testing}
 
## ${renderLicenseSection(data.license)}

## Questions
- Visit my GitHub page:
  - *[GitHub Page](https://github.com/${data.github})*
- Send an email with the project name as the subject to:
  - *${data.email}*
`;
}


module.exports = generateMarkdown;