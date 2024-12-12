import express from 'express';
import { ProductController } from '../controllers/productController';
const { authJwt } = require("../middlewares/authjwt");
const { verifyRole } = require("../middlewares/verifyRole");

const router = express.Router();
const productController = new ProductController();

router.post('/', [authJwt.verifyToken], [verifyRole.checkforAdminRole], productController.createProduct);
router.get('/', [authJwt.verifyToken], productController.getAllProducts);
router.put('/:id', [authJwt.verifyToken], [verifyRole.checkforAdminRole], productController.updateProduct);
router.delete('/:id', [authJwt.verifyToken], [verifyRole.checkforAdminRole], productController.deleteProduct);

export default router;
