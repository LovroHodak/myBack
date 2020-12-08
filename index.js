const express = require('express')
const app = express()
const port = 3000

// app.USE
app.use((req, res, next) => {
    console.log('I am in middleware!!')
    next()
})

app.use(express.static(__dirname + '/public'))

// app.GET
app.get('/', (req, res) => {
  res.send('Hello Lovros World!')
})

app.get('/home', (req, res) => {
    //res.send('Home of Lovros World!')
    console.log(__dirname)                  // C:\Users\Lovro\Desktop\labs\PRACTICE\myBack
    res.sendFile(__dirname + '/views/home.html')
})

app.get('/home/:city', (req, res) => {  // if I type in browser /home/japan
    console.log(req.params)             // i get -> { city: 'japan' }
    res.send('Which ever city')
    let myCity = req.params.city
    console.log(myCity)                 // i get -> japan
})

app.listen(port, () => {
  console.log(`Example Lovro app listening at http://localhost:${port}`)
})

