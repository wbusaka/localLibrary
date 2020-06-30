let express = require('express')
let router = express.Router()

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('users')
})

router.get('/cool', function(req, res, next) {
  res.send("cool", "You're so cool")
})

module.exports = router
