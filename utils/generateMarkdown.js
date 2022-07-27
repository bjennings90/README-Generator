// Function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  return license?`badge: ${license}`: '';
}

// Function that returns the license link
function renderLicenseLink(license) {
  return `![${license}](https://img.shields.io/badge/MIT-License-blue)`;
}

// Function that returns the license section of README
function renderLicenseSection(license) {
  if (!license||license === 'no license') return '';
  return `
  This application has a license of ${license}.
  ${renderLicenseLink(license)}
  `
}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Description
    ${data.description}
  ## Table of Contents
  [Description](#description)
  [Installation](#installation)
  [Usage](#usage)
  [License](#license)
  [Contributing](#contributing)
  [Tests](#tests)
  [Questions](#questions)
  ## Installation
    ${data.installationInstructions}
  ## Usage
    ${data.usageInformation}
  ## License
    ${renderLicenseSection(data.license)}
  ## Contributing
    ${data.contributionGuidelines}
  ## Tests
    ${data.testInstructions}
  ## Questions
   https://github.com/${data.username}
   If you have any questions, you can reach me at email address: ${data.emailAddress}
`;
}

module.exports = generateMarkdown;
