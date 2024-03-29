import {choiceTasks, confirmDeleteTask, inquirerMenu, pause, readInput, choiceCompleteTasks} from './helpers/inquirer.js'
import { readFile, saveFile } from './helpers/manageFile.js';
import Tasks from './models/tareas.js';
const main  = async() => {
    let opt;

    const tasks = new Tasks();

    const fileLoaded = readFile()
    if (fileLoaded){
        tasks.loadTasks(fileLoaded)
    }
    
    do {
        
        opt = await inquirerMenu()

        switch (opt) {
            case 1:
                const desc = await readInput('Description:');
                tasks.createTask(desc)
                break;
            case 2:
                console.log(tasks.watchTasks());
                break;
            case 3:
                console.log(tasks.TasksPendingCompleted(true))
                break;
            case 4:
                console.log(tasks.TasksPendingCompleted(false))
                break;
            case 5:
                const ids = await choiceCompleteTasks(tasks.listArray)
                tasks.CompleteTasks(ids)
            break;
            case 6:
                const id = await choiceTasks(tasks.listArray)
                if (id != 0){
                    const answer = await confirmDeleteTask()
                    if(answer){
                        tasks.deleteTask(id)
                        console.log('Task removed successfully')
                    }
                }
            break;
            case 0:
                
            break;
        }

        saveFile(tasks.listArray)

        if (opt != 0){
            await pause()
        }
    } while (opt != 0);
}

main() 