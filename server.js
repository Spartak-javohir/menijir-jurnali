const express = require('express')
const fs = require('fs').promises
const kursdatabase = require('./moduls/database')



const db = new kursdatabase()
// console.log(udb.addData('javohir', 'abdujalilov', 21, 'buxoro', 'web developer', 'instagram'));



 const app = express();

 app.listen(3060, ()=>{
     console.log('app running port');
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
 app.get("/manager", async (req, res)=>{
     let udata = await db.readufile();
     res.json({
         udata: udata
     })
 })

 app.post("/uform", async (req, res)=>{
    let name = await db.adduData(req.body.name, req.body.age, req.body.kurs, req.body.manba)
    console.log(req.body);
 })


 