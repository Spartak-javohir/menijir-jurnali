const fs = require('fs/promises')
const path = require('path')

module.exports = class Uquvdatabase{
    constructor(){
        this.uquvchipath = path.join(__dirname, '..', '/uquvchi.json')
        this.uquvchidata = []
        this.readuquvfile()
    }

    async readuquvfile(){
       let uquvchidata = await fs.readFile(this.uquvchipath, 'utf-8')
       uquvchidata = await JSON.parse(uquvchidata)
        this.uquvchidata = uquvchidata.uquvchidata
         console.log(uquvchidata.uquvchidata)
        
    }
    async addData(name, surname, age, viloyat, kurs, manba){
        let udata= [{
            id: this.uquvchidata.length+1,
            name: name,
            surname: surname,
            age: age,
            viloyat: viloyat,
            kurs: kurs,
            manba: manba
        }]
        this.uquvchidata.push(udata)
        await fs.writeFile(this.uquvchipath, JSON.stringify({uquvchidata:this.uquvchipath}))
         return udata
    }
    
}
