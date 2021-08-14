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
        return uquvchidata.uquvchidata
        
    }
    async addData(){
        let udata= {
            id: udata.length+1,
            name,
        }
        this.uquvchidata.push(udata)
        await fs.writeFile(this.uquvchipath, JSON.stringify({uquvchidata:this.uquvchipath}))
         return udata
    }
    
}
