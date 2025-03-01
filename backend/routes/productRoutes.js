import express from 'express'
import { getProducts, getProductById } from '../controllers/productController.js'

const router = express.Router()

// @desc    Fetch all products
// @route   GET /api/products/
// @access  public
router.get('/', getProducts)

// @desc    Fetch single product by Id
// @route   GET /api/products/:id
// @access  public
router.get('/:id', getProductById)

export default router