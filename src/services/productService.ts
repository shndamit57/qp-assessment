import ProductRepository from '../repositories/product.repository';

class ProductService {
    async createProduct(data: { name: string; price: number; stock: number }) {
        return ProductRepository.create(data);
    }

    async getAllProducts() {
        return ProductRepository.getAll();
    }

    async updateProduct(id: number, updates: Partial<{ name: string; price: number; stock: number }>) {
        return ProductRepository.update(id, updates);
    }

    async deleteProduct(id: number) {
        return ProductRepository.delete(id);
    }
}

export default new ProductService();
