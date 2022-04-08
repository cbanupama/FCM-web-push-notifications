import express from 'express'
import path from 'path';
import fs from 'fs'
// import bodyParser from 'body-parser'
const app = express()

app.use(express.urlencoded({extended: true}));
app.use(express.json())
app.use(express.static('public'))

app.listen(3000, ()=>{
    console.log('Server started')
})