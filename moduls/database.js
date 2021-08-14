const fs = require("fs/promises")
const path = require('path')


module.exports = class Database{
    constructor(){
        this.kurspath = path.join(__dirname, '../ruots/kurs.json')
        this.kursdata = []
        this.readkursfile()
        

    }

    async readkursfile(){
        const kdata = await fs.readFile(this.kurspath, 'utf-8')
        console.log(kdata);
    }
}