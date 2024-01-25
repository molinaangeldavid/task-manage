import Task from "./tarea.js"

export default class Tasks {

    _list = {}

    get listArray(){
        const listKeys = []
        Object.keys(this._list).forEach(key => {
            listKeys.push(this._list[key])
        })
        return listKeys
    }

    constructor(){
        this._list = {}
    }

    loadTasks(data){
        data.forEach(key => {
            this._list[key.id] = key
        })
    }

    createTask(desc = ''){
        const task = new Task(desc)
        this._list[task.id] = task
    }

    watchTasks(){
        let tasks = ''
        let status;
        this.listArray.forEach( (key,index) => {
            if(key.completeIn){
                status = `${'Completada'.green}`
            }else{
                status = `${'Pendiente'.red}`
            }
            tasks += `${(index+1)}.`.green + ` ${key.description}`  + ` :: ${status}\n`
        })
        return tasks;
    }

    TasksPendingCompleted(isCompleted){
        let tasksCompleted = '';
        let tasksPending = '';
        let status;
        let counter = 0;
        this.listArray.forEach( key => {
            if(isCompleted){
                if (key.completeIn != null){
                    counter += 1;
                    status = ` :: ` + `${key.completeIn}`.green + '\n';
                    tasksCompleted += `${counter}.`.green + ` ${key.description}` + status
                }
            }else{
                if(key.completeIn == null){
                    counter += 1;
                    tasksPending += `${counter}.`.green + ` ${key.description}\n` ;
                }
            }
        })
        if(isCompleted){
            return tasksCompleted;
        }else{
            return tasksPending;
        }
    }

    deleteTask(id){
        if (this._list[id]){
            delete this._list[id]
        }
    }

    CompleteTasks(ids){
        ids.forEach(id => {
            const task = this._list[id]
            if(!task.completeIn){
                task.completeIn = new Date().toISOString()
            }
        })

        this.listArray.forEach(task => {
            if (! ids.includes(task.id)){
                this._list[task.id].completeIn = null
            }
        })
    }

}
