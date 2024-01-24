import { v4 as uuidv4 } from 'uuid'


export default class Task {

    id = '';
    description = '';
    completeIn = null;

    constructor(descr){
        this.id = uuidv4(),
        this.description = descr;
    }

}


