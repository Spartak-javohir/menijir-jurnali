const { json } = require("express")
const { writeFile } = require("fs")
const fs = require("fs/promises")
const path = require('path')


module.exports = class Database{
    constructor(){
        this.kurspath = path.join(__dirname, '..', '/kurs.json')
        this.kursdata = []
        this.readkursfile()
        

    }

    async readkursfile(){
        let kursdata = await fs.readFile(this.kurspath, 'utf-8')
        kursdata = await JSON.parse(kursdata)
        this.kursdata = kursdata.kursdata
        return kursdata.kursdata
        
    }
    async addData(){
        let kdata= {
            id: Math.random().toString(32).substring(2),
            name,
        }
        this.kursdata.push(kdata)
        await fs.writeFile(this.kurspath, JSON.stringify({kursdata:this.kursdata}))
         return kdata
    }
}