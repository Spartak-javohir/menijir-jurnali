const express = require('express')
const fs = require('fs').promises
const kursdatabase = require('./moduls/database')
const uquvdatabase = require('./moduls/uquvdatabase')



const kdb = new kursdatabase()


 const app = express();
 app.listen(3030, ()=>{
     console.log('app running at 3030 port');
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
app.post("/add_kurs", async (req, res)=>{
    console.log(res.body);
})
 