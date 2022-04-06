// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license !== null) {
        return `![${license}](https://img.shields.io/badge/${license}-License-yellowgreen)`
    } else(license === "")
        //default case 
    return ``;
};


// Function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}

## Description:
    ${data.description}
    ${renderLicenseBadge(data.license)}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contrubuting](#contributing)
* [Tests](#tests)
* [Questions](#questions)



## Installation Instructions: 
    ${data.install}

## Usage Instructions: 
    ${data.usage}

## Contributors:
    ${data.contributors}    

## Tests:
    ${data.test}

## Questions
    If there are any questions about this project feel free to email me at ${data.email}. Find all of my other projects at https://github.com/${data.github}.
`;
}


// Exporting markdown to the index
module.exports = generateMarkdown;



// TODO: Create a function that returns the license link
// If there is no license, return an empty string
//function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
//function renderLicenseSection(license) {}