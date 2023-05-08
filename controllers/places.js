const router = require('express').Router()
const places = require('../models/places')
const db = require('../models')

// More code here in a moment
router.get('/', (req, res) => {
    db.Place.find()
      .then((places) => {
        res.render('places/index', {places})
      })
      .catch(err => {
        console.log(err)
        res.send(err)
      })
})

router.get('/new', (req, res) => {
  res.render('places/new.jsx')
})

router.get('/:id', (req, res) => {
  db.Place.findById(req.params.id)
  .populate('comments')
  .then(place => {
      console.log(place.comments)
      res.render('places/show.jsx', { place })
  })
  .catch(err => {
      console.log('err', err)
      res.send(err)
  })
})


router.get('/:id/edit', (req, res) => {
  db.Place.findById(req.params.id)
  .then(place => {
      res.render('places/edit', { place })
  })
  .catch(err => {
      res.render('error404')
  })
})



router.post('/', (req, res) => {
  db.Place.create(req.body)
  .then(() => {
      res.redirect('/places')
  })
  .catch(err => {
    if (err && err.name == 'ValidationError') {
      let message = 'Validation Error: '
      for (var field in err.errors) {
          message += `${field} was ${err.errors[field].value}. `
          message += `${err.errors[field].message}`
      }
      console.log('Validation error message', message)
      res.render('places/new', { message })
      }
      else {
          res.send(err)
      }
    })
})

//Post Comment
router.post('/:id/comment', (req, res) => {
  console.log(req.body)
  db.Place.findById(req.params.id)
  .then(place => {
      db.Comment.create(req.body)
      .then(comment => {
          place.comments.push(comment.id)
          place.save()
          .then(() => {
              res.redirect(`/places/${req.params.id}`)
          })
      })
      .catch(err => {
          res.send(err)
      })
  })
  .catch(err => {
      res.render('error404')
  })
})

//Delete Comment
router.delete('/:id/comment/:commentId', (req, res) => {
  db.Comment.findByIdAndDelete(req.params.commentId)
      .then(() => {
          console.log('Success')
          res.redirect(`/places/${req.params.id}`)
      })
      .catch(err => {
          console.log('err', err)
          res.render('error404')
      })
})

router.delete('/:id', (req, res) => {
  db.Place.findByIdAndDelete(req.params.id)
  .then(place => {
      res.redirect('/places')
  })
  .catch(err => {
      console.log('err', err)
      res.render('error404')
  })
})


router.put('/:id', (req, res) => {
  db.Place.findByIdAndUpdate(req.params.id, req.body)
  .then(() => {
      res.redirect(`/places/${req.params.id}`)
  })
  .catch(err => {
      console.log('err', err)
      res.render('error404')
  })
})


module.exports = router
