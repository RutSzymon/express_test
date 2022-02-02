const express = require('express')
const router = express.Router()

router.use(logger)

router.get('/', (req, res) => {
  const { term } = req.query
  res.render('cars/index', { cars: filtered_cars(term) })
})

router.get('/new', (req, res) => {
  res.render('cars/new')
})

router.post('/', (req, res) => {
  const { make, model } = req.body
  if (make && model) {
    cars.push({ make, model })
    res.redirect(`/cars/${cars.length - 1}`)
  } else {
    res.status(422).render('cars/new', { make, model })
  }
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
  req.car = cars[id - 1]
  next()
})

function logger(req, res, next) {
  console.log(req.originalUrl)
  next()
}

function filtered_cars(term) {
  return term ? cars.filter(({ make, model }) => make.includes(term) || model.includes(term)) : cars
}

module.exports = router
