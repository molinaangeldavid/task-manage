import inquirer from 'inquirer';
import colors from 'colors'

const questions = [
    {
        type:  "list",
        name: "opt",
        message: 'Options',
        choices: [
            {
                name: "1. Crear Tarea",
                value: 1
            },
            {
                name: "2. Listar tarea",
                value: 2
            },
            {
                name:  "3. Listar tareas completadas",
                value: 3
            },
            {
                name: "4. Listar tareas pendientes",
                value: 4
            },
            {
                name: "5. Completar tarea/s",
                value: 5
            },
            {
                name: "6. Borrar tarea",
                value: 6
            },
            {
                name: "0. Salir",
                value: 0
            },
        ]
    }
]

const pauseQuestions = [
    {
        type: "input",
        name: "pause",
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
