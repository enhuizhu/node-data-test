const { ProductModel } = require('../models/product.model');

class ProductService {
    static async getAllSortedProducts() {
        const products = await ProductModel.getAllProducts();
        return products.sort((p1, p2) => p2.price - p1.price);
    }
}

module.exports = {
    ProductService
}
