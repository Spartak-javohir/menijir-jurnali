const express = require('express')
const fs = require('fs').promises


 const app = express();
 app.listen(3030, ()=>{
     console.log('app running at 3030 port');
 })

 app.use(express.static(__dirname+'/public'))
 app.get('/', async (req, res)=>{
    let reed = await fs.readFile(__dirname+'/views/index.html', 'utf-8')
    let style = await fs.readFile(__dirname+'/public/style.css', 'utf-8')
    res.send(reed)
 })
 