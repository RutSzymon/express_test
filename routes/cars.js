const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.send('Car List')
})

router.get('/new', (req, res) => {
  res.send('Car New Form')
})

router.post('/', (req, res) => {
  res.send('Create Car')
})

router
  .route('/:id')
  .get((req, res) => {
    res.send(`Get Car ${req.params.id}: ${req.car.make} ${req.car.model}`)
  })
  .put((req, res) => {
    res.send(`Update Car with ID ${req.params.id}`)
  })
  .get((req, res) => {
    res.send(`Delete Car with ID ${req.params.id}`)
  })

const cars = [
  { make: 'Aston Martin', model: 'Victor' },
  { make: 'Bugatti', model: 'Bolide' },
  { make: 'Ferrari', model: 'FXX-K' },
  { make: 'KTM', model: 'X-Bow' },
  { make: 'McLaren', model: '720S' }
]

router.param('id', (req, res, next, id) => {
  req.car = cars[id]
  next()
})

module.exports = router
