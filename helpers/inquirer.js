import inquirer from 'inquirer';
import colors from 'colors'

const questions = [
    {
        type:  "list",
        name: "opt",
        message: 'Options',
        choices: [
            {
                name: `${'1.'.green} Crear Tarea`,
                value: 1
            },
            {
                name: `${'2.'.green} Listar tarea`,
                value: 2
            },
            {
                name: `${'3.'.green} Listar tareas completadas`,
                value: 3
            },
            {
                name: `${'4.'.green} Listar tareas pendientes`,
                value: 4
            },
            {
                name: `${'5.'.green} Completar tarea/s`,
                value: 5
            },
            {
                name: `${'6.'.green} Borrar tarea`,
                value: 6
            },
            {
                name: `${'0.'.green} Salir`,
                value: 0
            },
        ]
    }
]

const pauseQuestions = [
    {
        type: "input",
        name: `"pause`,
        message: `Press ${'ENTER'.green} to continue.`
    }
]

export const inquirerMenu = async() => {
    console.clear()
    console.log("==============================".green)
    console.log("    Select an option".white)
    console.log("==============================".green)

    const {opt} = await inquirer.prompt(questions)
    return opt;

}

export const pause = async() => {
    await inquirer.prompt(pauseQuestions)
}

export const readInput = async(message) => {

    const question = {
        type: 'input',
        name: 'inputDes',
        message,    
        validate(value){
            if(value.length == 0){
                return 'Must write a value'
            }
            return true
        }
    }

    const {inputDes} = await inquirer.prompt(question)
    return inputDes

}
