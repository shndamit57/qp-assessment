import Order from '../models/orderModel';
import Product from '../models/productModel';

class OrderRepository {
    static async createOrder(userid: number, productid: number, quantity: number) {
        const product = await Product.findByPk(productid);
        if (!product) throw new Error('Product not found');
        if (product.stock < quantity) throw new Error('Not enough stock');

        const order = await Order.create({
            userid,
            productid,
            quantity,
        });

        product.stock -= quantity;
        await product.save();

        return order;
    }
}

export default OrderRepository;
