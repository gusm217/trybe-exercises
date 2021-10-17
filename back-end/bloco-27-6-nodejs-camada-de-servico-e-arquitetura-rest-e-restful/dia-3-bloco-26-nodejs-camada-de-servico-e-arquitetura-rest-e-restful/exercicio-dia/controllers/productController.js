const express = require('express');
const ProductModel = require('../models/productModel');

const router = express.Router();

router.get('/list-products', async (req, res, next) => {
  try{
    const products = await ProductModel.getAll();
    res.status(200).json(products);

  } catch (error) {
    res.status(500).json({erro: 'deu pau aqui'})    
  }
});

router.get('/get-by-id/:id', async (req, res, next) => {
  try{
    const product = await ProductModel.getById(req.params.id); 
  
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({erro: 'deu pau aqui'})    
  }
});

router.post('/add-user', async (req, res) => {
  try {
    const { name, brand } = req.body;
  
    const newProduct = await ProductModel.add(name, brand);  
  
    res.status(201).json(newProduct);

  } catch (error) {
    res.status(500).json({erro: 'deu pau aqui'})
  }
 
});

router.delete('/delete-user/:id', async (req, res) => {
  try {
    const products = await ProductModel.exclude(req.params.id);  
  
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({erro: 'deu pau aqui'})
  }
});

// PERGUNTAR DO PQ NÃO RETORNOU O JSON NO SUCESSO
router.put('/update-user/:id', async (req, res) => {
  try {
    const { name, brand } = req.body;
  
    const products = await ProductModel.update(req.params.id, name, brand);  
  
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({erro: 'deu pau aqui'})    
  }
});

module.exports = router;