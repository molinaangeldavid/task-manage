import fs, { existsSync } from 'fs'

const pathFile = './db/file.json';
export const saveFile = data => {

    fs.writeFileSync(pathFile, JSON.stringify(data));

}

export const readFile = () => {
    if (existsSync(pathFile)){
        const file = fs.readFileSync(pathFile, {encoding: 'utf-8'})
        return JSON.parse(file);
    }else{
        return null
    }
}

