const express = require('express')
const app = express()
//const port = 3000

require('dotenv').config()
const port = process.env.PORT

let { students } = require('./UN-USED/data')

const hbs = require('hbs')
hbs.registerPartials(__dirname + '/views/partials')


// app.USE
app.use((req, res, next) => {
    //console.log('I am in middleware!!')
    //console.log(students)
    next()
})

app.use(express.static(__dirname + '/public'))


// app.SET
app.set('view engine', 'hbs')

app.set('views', __dirname + '/views')


// app.GET
app.get('/', (req, res) => {
  //res.send('Hello Lovros World!')
  res.render('landing.hbs', {layout: false})
})

app.get('/lovro', (req, res) => {
    //res.send('Hello Lovros World!')
    res.render('lovro.hbs', {name: 'Lovro'})
  })

app.get('/home', (req, res) => {
    //res.send('Home of Lovros World!')
    //console.log(__dirname)                  // C:\Users\Lovro\Desktop\labs\PRACTICE\myBack
    res.sendFile(__dirname + '/views/home.html')
})

app.get('/home/:city', (req, res) => {  // if I type in browser /home/japan
    console.log(req.params)             // i get -> { city: 'japan' }
    res.send('Which ever city')
    let myCity = req.params.city
    console.log(myCity)                 // i get -> japan
})

app.get('/students', (req, res) => {
    students.sort((a, b) => {
        if(a.name > b.name){
            return 1
        } else if(a.name < b.name){
            return -1
        } else {
            return 0
        }
    })

    res.render('students.hbs', {students})
})


//app.LISTEN
app.listen(port, () => {
  console.log(`Example Lovro app listening at http://localhost:${port}`)
})

