const express = require('express')
const app = express()

app.set('view engine', 'ejs')

app.get('/', logger, (req, res) => {
  res.render('index', { text: 'World' })
})

const carRouter = require('./routes/cars')

app.use('/cars', carRouter)

function logger(req, res, next) {
  console.log(req.originalUrl)
  next()
}

app.listen(3000)
