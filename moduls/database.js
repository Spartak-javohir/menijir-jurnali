
const fs = require("fs/promises")
const path = require('path')


module.exports = class Database{
    constructor(){
        // kurslar uchun
        this.kurspath = path.join(__dirname, '..', '/routs', '/kurs.json')
        this.kdata = []
        this.readkfile()

        // uquvchilar uchun
        this.upath = path.join(__dirname, '..', '/routs', '/uquvchi.json')
        this.udata = []
        this.readufile()

        // manbalar uchun
        // this.manbapath = path.join(__dirname, '..', '/routs', '/qayer.json')
        // this.mdata = []
        // this.readmfile()
        

    }
        // kurs class
    async readkfile(){
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
        this.kdata.push(kdata)
        await fs.writeFile(this.kpath, JSON.stringify({kdata:this.kdata}))
         return kdata
    }

    // uquvchi class

    async readufile(){
        let udata = await fs.readFile(this.upath, 'utf-8')
        udata = await JSON.parse(udata)
         this.udata = udata.udata
          console.log(udata.udata)
         
     }
     async addData(name, surname, age, viloyat, kurs, manba){
         let udata= [{
             id: this.udata.length+1,
             name: name,
             surname: surname,
             age: age,
             viloyat: viloyat,
             kurs: kurs,
             manba: manba
         }]
         this.udata.push(udata)
         await fs.writeFile(this.upath, JSON.stringify({udata:this.upath}))
          return udata
     }
}