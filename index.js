const inquirer = require('inquirer')
const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt')
const fs = require('fs')
const renderLogo = require('./lib/renderlogo')

inquirer.registerPrompt('maxlength-input', MaxLengthInputPrompt)
const questions = [
    {
        type: 'maxlength-input',
        name: 'text',
        message: 'Text (up to 3 characters):',
        maxLength: 3,
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Text Color:',
    },
    {
        type: 'list',
        message: 'Shape:',
        name: 'shape',
        choices: ['Square', 'Circle', 'Triangle'],
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Shape Color:',
    },
]

inquirer
    .prompt(questions)
    .then((data) => {
        let logo = renderLogo(data.shape, data.text, data.textColor, data.shapeColor)
        fs.writeFile('logo.svg', logo, (err) => {
            err ? console.log(err) : console.log('Generated logo.svg!')
        })
    })