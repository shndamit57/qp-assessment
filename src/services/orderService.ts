import OrderRepository from '../repositories/order.repository';

class OrderService {
    static async createOrder(userid: number, productid: number, quantity: number) {
        try {
            const order = await OrderRepository.createOrder(userid, productid, quantity);
            return order;
        } catch (error: any) {
            throw new Error(error.message);
        }
    }
}

export default OrderService;
