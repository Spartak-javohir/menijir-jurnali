const express = require('express')
const fs = require('fs').promises
const kursdatabase = require('./moduls/database')



const udb = new uquvdatabase()
const kdb = new kursdatabase()
// console.log(udb.addData('javohir', 'abdujalilov', 21, 'buxoro', 'web developer', 'instagram'));



 const app = express();

 app.listen(3060, ()=>{
     console.log('app running port');
    //  console.log(__dirname, + "/public")
 })
 app.use(express.urlencoded({
     extended: true,
 }))
app.use(express.json())

 app.use(express.static(__dirname+'/public'))

 app.get('/', async (req, res)=>{
    let reed = await fs.readFile(__dirname+'/views/index.html', "utf-8")
    res.send(reed)
 })


 