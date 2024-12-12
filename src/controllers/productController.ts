import { Request, Response } from 'express';
import ProductService from '../services/productService';

export class ProductController {
    constructor() {}

    async createProduct(req: Request, res: Response) {
        try {
            const item = await ProductService.createProduct(req.body);
            res.status(201).json(item);
        } catch (error: any) {
            res.status(500).json({ error: error.message });
        }
    }

    async getAllProducts(req: Request, res: Response) {
        try {
            const items = await ProductService.getAllProducts();
            res.json(items);
        } catch (error: any) {
            res.status(500).json({ error: error.message });
        }
    }

    async updateProduct(req: Request, res: Response) {
        try {
            const item = await ProductService.updateProduct(Number(req.params.id), req.body);
            if (item) {
                res.json(item);
            } else {
                res.status(404).json({ error: 'Item not found' });
            }
        } catch (error: any) {
            res.status(500).json({ error: error.message });
        }
    }

    async deleteProduct(req: Request, res: Response) {
        try {
            const success = await ProductService.deleteProduct(Number(req.params.id));
            if (success) {
                res.status(204).send();
            } else {
                res.status(404).json({ error: 'Item not found' });
            }
        } catch (error: any) {
            res.status(500).json({ error: error.message });
        }
    }
}