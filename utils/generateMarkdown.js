// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Description

  ${data.description}

  ## Table of Contents
  * ### [Installation](#installation)
  * ### Usage
  * ### License
  * ### Contributing
  * ### Tests
  * ### Questions

  ## Installation
  ## Usage
  ## License
  ## Contributing
  ## Tests
  ## Questions
`;
}

module.exports = generateMarkdown;
