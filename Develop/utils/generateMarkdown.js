// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return license?`badge: ${license}`: '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return `(View License)[${license}]`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license||license === 'no license') return '';
  return `
  This application has a license of ${license}.
  ${renderLicenseLink(license)}
  `
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Description
    ${data.description}
  ## Table of Contents
 (description)[/#description]
  ## Installation
    ${data.installationInstructions}
    (description)[/#description]
  ## Usage
    ${data.usageInformation}
  ## License
    ${renderLicenseSection(data.license)}
  ## Contributing
    ${data.contributionGuidelines}
  ## Tests
    ${data.testInstructions}
  ## Questions
   (${data.username})[https://github.com/${data.username}]
   If you have any questions, you can reach me at email address: ${data.emailAddress}
`;
}

module.exports = generateMarkdown;
