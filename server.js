const express = require('express')
const app = express()

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

app.set('view engine', 'ejs')

const carRouter = require('./routes/cars')

app.use('/cars', carRouter)

app.listen(3000)
