var express = require('express')
var router = express.Router()

// Route index page
router.get('/', function (req, res) {
  res.render('index')
})

// add your routes here

router.post('/juggling-trick', function (req, res) {

  // Make a variable and give it the value from 'juggling-balls'
  var jugglingBalls = req.session.data['juggling-balls']

  // Check whether the variable matches a condition
  if (jugglingBalls == "3 or more"){
    // Send user to next page
    res.redirect('/juggling-trick')
  } else if (jugglingBalls == "1 or 2") {
    res.redirect('/learn-to-juggle')
  }
  else {
    // Send user to ineligible page
    res.redirect('/learn-to-juggle')
  }

})

router.post('/contact-method', function (req, res) {

  // Make a variable and give it the value from 'juggling-balls'
  var classes = req.session.data['register-for-classes']

  // Check whether the variable matches a condition
  if (classes == "Yes"){
    // Send user to next page
    res.redirect('/contact')
  }
  else {
    // Send user to ineligible page
    res.redirect('/check-your-answers')
  }

})
module.exports = router
