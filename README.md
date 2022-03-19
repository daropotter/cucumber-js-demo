[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://choosealicense.com/licenses/mit/)

# Gherkin in JS demo

This is a demo of Gherkin in JS using Cucumber.js library. The example app is a simple
Node.js application with Selenium webcrawler. The demo shows how you can use Cucumber.js
to test your front-end by checking if the components are in the right places.

## Setup

The demo project is already set up.
If you don't want to set up your own project, skip this chapter directly to execution.

The setup is easy. Use NPM to add the dependency and then add a couple of files.

Add Cucumber.js to your project:
```bash
npm install --save-dev @cucumber/cucumber
```
Create `features` directory and `steps.js` inside of it. You can choose the file name you like.
This is the equivalent of the context file in Behat. You can have as many contexts as you need.

In the context files (or step-files) you will need to require/import some elements from Cucumber.js.
The example uses Assert and Selenium libraries as well.

```javascript
const {When, Then, After} = require('@cucumber/cucumber');
const assert = require('assert');
const {Builder, By, until} = require('selenium-webdriver');
```

Create you first feature file(s) inside the `features` directory.

## Execute

1. Add more tests to your feature file(s). Unrecognized steps will be highlighted in the IDE.
   With help from the Cucumber plugin add missing steps to the context file(s).

1. Alternatively, run the tests. Cucumber.js will recognize missing steps and will tell
   you what to add to the context file(s).

1. Fill the new methods with your code that do what the steps suggest.

1. Run your tests with:
```bash
npx cucumber-js
```
Alternatively, you can run tests directly from WebStorm or VS Code using the Cucumber plugin.


## License

[MIT](https://choosealicense.com/licenses/mit/)


## 🔗 Links
[![github](https://img.shields.io/badge/github-000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/daropotter)
[![gitlab](https://img.shields.io/badge/gitlab-003385?style=for-the-badge&logo=gitlab&logoColor=white)](https://gitlab.com/daropotter)
[![gitlab](https://img.shields.io/badge/discord-0A66C2?style=for-the-badge&logo=discord&logoColor=white)](https://discordapp.com/users/355099945805807627)
[![twitter](https://img.shields.io/badge/twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/daropotter)

