// function to generate markdown for README
function generateMarkdown(data) {
  var badge;
  switch (data.license) {
    case "APACHE 2.0":
      badge = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
      break;
    case "MIT":
      badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
      break;
    case "GPL 3.0":
      badge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
      break;
    case "BSD 3":
      badge = "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
      break;
    case "Unlicense":
      badge = "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)";
      break;
    case "none":
      break;
  }

  return `# ${data.title}
  
  ${badge}

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
  Commands to run to install dependencies: ${data.installation}

  ## Usage
  ${data.usage}

  ## Contributing
  ${data.contributing}

  ## Tests
  Command to run tests: ${data.test}

  ## Questions
  Follow me on GitHub at https://github.com/${data.github}

  Please contact me with any questions or feedback at ${data.email} 
`;
}

module.exports = generateMarkdown;
