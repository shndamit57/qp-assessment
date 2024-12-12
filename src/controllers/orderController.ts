import { Request, Response } from 'express';
import OrderService from '../services/orderService';

export class OrderController {
    constructor() { }

    async createOrder(req: Request, res: Response) {
        try {
            const { userid, productid, quantity } = req.body;
            const order = await OrderService.createOrder(userid, productid, quantity);
            res.status(201).json(order);
        } catch (error: any) {
            res.status(400).json({ message: error.message });
        }
    }
}