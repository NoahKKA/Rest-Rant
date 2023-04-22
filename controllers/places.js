const router = require('express').Router()
let places = [];


// More code here in a moment
router.get('/', (req, res) => {
    places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: 'http://placekitten.com/250/250'
      }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: 'http://placekitten.com/250/250'
      }]
      
    res.render('places/index.jsx', {places})
})

router.get('/new', (req, res) => {
  res.render('places/new.jsx')
})

router.post('/', (req, res) => {
  places.push(req.body)
  res.redirect('/places')
  console.log(places)
})

module.exports = router

