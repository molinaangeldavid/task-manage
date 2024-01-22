import colors from 'colors';
import {inquirerMenu} from './helpers/inquirer.js'
import {pause} from './helpers/inquirer.js'
const main  = async() => {
    let opt;
    do {
        
        opt = await inquirerMenu()
        console.log(opt)
        await pause()
    } while (opt != 0);
}

main() 