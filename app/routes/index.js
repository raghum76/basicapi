var router = require('express').Router()
 
var product = require('./product')
router.use('/product', product)
 
router.get('/', function (req, res) {
  res.status(200).json({ message: 'Estás conectado a nuestra API' })
})
//localhost:1339/api
module.exports = router