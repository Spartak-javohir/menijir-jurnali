const { json } = require("express")
const fs = require("fs/promises")
const path = require('path')


module.exports = class Database{
    constructor(){
        this.kurspath = path.join(__dirname, '../kurs.json')
        this.kursdata = []
        this.readkursfile()
        

    }

    async readkursfile(){
        let kursdata = await fs.readFile(this.kurspath, 'utf-8')
        kursdata = await JSON.parse(kursdata)
        this.kursdata = kursdata.kursdata
        console.log(kursdata.kursdata);
    }
}