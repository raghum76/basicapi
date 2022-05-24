var router = require('express').Router()
router.get('/', function(req, res) {
  res.json({ message: 'Estás conectado a la API. Recurso: Product' })
})
router.get('/:id', function(req, res) {
  res.json({ message: 'Vas a obtener el producto con id ' + req.params.id })
})
router.post('/', function(req, res) {
  res.json({ message: 'Vas a añadir un producto',datos:req.body })
})
router.put('/:id', function(req, res) {
  res.json({ message: 'Vas a actualizar el producto con id ' + req.params.id })
})
//url:puerto/api/clientes
module.exports = router


