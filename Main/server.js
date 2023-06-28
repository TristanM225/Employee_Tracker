

const inquirer = require("inquirer");
const { makeQuery } = require('./js/askQuery');
const { question } = require("./js/question");

const selections = {
    type: 'list',
    name: 'selections',
    message: 'Please choose one of the following options',
    choices: question,
};

 init = () => {
    inquirer.prompt(selections).then((response) => makeQuery(response));
};

init();