'use strict';

const express = require('express');
const router = express.Router();
const dataModules = require('../auth/models/index');


router.param('model', (req, res, next) => {
  const modelName = req.params.model;
  if (dataModules[modelName]) {
    req.model = dataModules[modelName];
    next();
  } else {
    next('Invalid Model');
  }
});

//get all 
router.get('/:model', getAllProducts);

//get product by ID
router.get('/:model/:id', getOneProducts);
router.post('/:model',createProduct);
router.put('/:model/:id',updateProduct);
router.delete('/:model/:id', deleteProduct);


async function getAllProducts(req, res) {
  let products = await req.model.read();
  res.status(200).json(products);
}


async function getOneProducts(req, res) {
  try {
    const id = req.params.id;
    let product = await req.model.read(id)
    res.status(200).json(product);
  }catch(err) {
    throw new Error(err.message)
  }
}

async function createProduct(req, res) {
  let newProduct = req.body;
  let products = await req.model.create(newProduct);
  res.status(200).json(products);
}


async function updateProduct(req, res) {
  let id=req.params.id;
  let updateProduct = req.body;
  let products = await req.model.update(id,updateProduct);
  res.status(200).json(products);
}


async function deleteProduct(req, res) {
  let id=req.params.id;
  await req.model.delete(id);
  res.status(200).json('Delete is Done ....!!!');
}
  



module.exports = router; 
