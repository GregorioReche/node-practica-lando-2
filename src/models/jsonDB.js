const fs = require('fs');
const path = require('path');


const jsonDB = {
    file : 'users.json',
    readFile: () => {
        fs.readFileSync(path.resolve(__dirname,'../data/users.json'),'utf-8');
    }
} 

module.exports = jsonDB;