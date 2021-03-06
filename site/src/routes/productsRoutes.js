// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const productsController = require('../controllers/productsControllers');
router.get('/productAdd', productsController.productAdd);
router.post('/productAdd', productsController.guardarProducto);
router.get('/productsEdit', productsController.editar);
router.put('/:id', productsController.update);
router.get('/productDetail', productsController.productDetail);
router.get('/productCart', productsController.productCart);
router.get('/', productsController.products);//productos
router.delete('/:id', productsController.delete);

module.exports = router;