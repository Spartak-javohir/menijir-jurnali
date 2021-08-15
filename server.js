const express = require('express')
const fs = require('fs').promises
const kursdatabase = require('./moduls/database')
const uquvdatabase = require('./moduls/uquvdatabase')



const udb = new uquvdatabase()
const kdb = new kursdatabase()
// console.log(udb.addData('javohir', 'abdujalilov', 21, 'buxoro', 'web developer', 'instagram'));



 const app = express();

 app.listen(4000, ()=>{
     console.log('app running at 4000 port');
 })
 app.use(express.urlencoded({
     extended: true,
 }))
app.use(express.json())

 app.use(express.static(__dirname+'/public'))
 app.get('/', async (req, res)=>{
    let reed = await fs.readFile(__dirname+'/views/index.html', 'utf-8')
    res.send(reed)
 })

 app.get('/baz', async (req, res)=>{
     await kdb.addData('it')
    let kursdata = await kdb.readkursfile();
    res.json({
        kursdata: kursdata
    })
 }
)
// app.post("/add_kurs", async (req, res)=>{
//     const add_kurs = await udb.addData(req.body)

// })
 