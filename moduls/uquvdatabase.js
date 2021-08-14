const fs = require('fs/promises')
const path = require('path')

module.exports = class Uquvdatabase{
    constructor(){
        this.uquvchipath = path.join(__dirname, '../uquvchi.json')
        this.uquvchidata = []
        this.readuquvfile()
    }

    async readuquvfile(){
        console.log('uquv');
    }
}
