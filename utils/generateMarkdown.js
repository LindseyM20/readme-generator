// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents
  * ### [Installation](#installation)
  * ### [Usage](#usage)
  * ### [License](#license)
  * ### [Contributing](#contributing)
  * ### [Tests](#tests)
  * ### [Questions](#questions)

  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## License
  ${data.license}
  ## Contributing
  ${data.contributing}
  ## Tests
  ${data.tests}
  ## Questions
  Find me on GitHub at ${data.github}
  Please contact me with any questions or feedback at ${data.email} 
`;
}

module.exports = generateMarkdown;
