const fs  = require('fs');
const {promisify} = require('util');
const path = require('path');
const dataPath = path.join(__dirname, './db.json');
const readFile = promisify(fs.readFile) ;
const writeFile = promisify(fs.writeFile) ;

exports.getDB = async () => {
    const data = await  readFile(dataPath);

    return JSON.parse(data);
}

exports.createDB = async (data) => {
    const db = JSON.stringify(data);
    await writeFile(dataPath,db);
}

exports.updateDb = async (data) => {
    const db = JSON.stringify(data);
    await writeFile(dataPath,db);
}
