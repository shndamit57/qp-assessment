import { Router } from 'express';
import authRoutes from './authRoutes';
import productRoutes from './productRoutes';
import orderRoutes from './orderRoutes';

const router = Router();

router.use('/auth', authRoutes);
router.use('/product', productRoutes);
router.use('/order', orderRoutes);
export default router;
