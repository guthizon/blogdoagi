# Automated Tests with Cypress for Blog do AGI

This repository contains automated tests developed with Cypress for the [Blog do AGI](https://blogdoagi.com.br/) website.

## Installation

1. Make sure you have Node.js installed. You can download and install it from the [official website](https://nodejs.org/).

2. Clone this repository to your computer:
```bash
   git clone https://github.com/your-username/repository-name.git
```

Navigate to the project directory:

```bash
cd repository-name
```

Install project dependencies:
```bash
npm install
```

## Running Tests

To run the locally, you can use the npm run cypress:open command, which will open the Cypress Test Runner interface, where you can manually select and run the tests.

To run tests in headless mode (without a graphical interface), you can use the npm test or npm run cypress:run command.

Generating Reports with Mochawesome
Reports are automatically generated after running the tests and are saved in the ./mochareports directory. To view the reports, open the ./mochareports/mochawesome.html file in your browser after running the tests.

Running Tests with GitHub Actions
To run tests automatically using GitHub Actions, follow these steps:

Make sure you have the correct test configurations in your project. You can check the instructions in the "Running Tests" section.

Commit your changes and push them to the GitHub repository.

After committing and pushing the changes to the repository on GitHub, GitHub Actions will automatically start running the tests.

You can track the progress and results of the tests in the "Actions" section of your GitHub repository.

Make sure you have the correct permissions to configure and run GitHub Actions in your repository.


## Project Structure

cypress/integration: Contains Cypress test files.

mochareports: Contains reports generated by Mochawesome.

cypress.config.json: Cypress configuration file.

cypress/commands: Commands tu execute the test actions.

## Author

Copyright © 2024 Blog do AGI.

Gustavo Thizon Waterkemper




