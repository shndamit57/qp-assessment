import Product from '../models/productModel';

class ProductRepository {
  async create(item: Partial<Product>) {
    return Product.create(item);
  }

  async getAll() {
    return Product.findAll();
  }

  async update(id: number, updates: Partial<Product>) {
    const item = await Product.findByPk(id);
    if (item) {
      return item.update(updates);
    }
    return null;
  }

  async delete(id: number) {
    return Product.destroy({ where: { id } });
  }
}

export default new ProductRepository();

