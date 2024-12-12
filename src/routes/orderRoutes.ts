import express from 'express';
import { OrderController } from '../controllers/orderController';
const { authJwt } = require("../middlewares/authjwt");
const { verifyRole } = require("../middlewares/verifyRole");

const router = express.Router();
const orderController = new OrderController();

router.post('/', [authJwt.verifyToken], [verifyRole.checkforUserRole], orderController.createOrder);

export default router;
