import express from 'express';
import { AuthController } from '../controllers/authController';

const router = express.Router();
const authController = new AuthController();

router.post('/signin', authController.signin);
router.post('/signout', authController.signout);

export default router;