const { ProductService } = require('./services/product.service');

async function logProducts() {
    const sortedProducts = await ProductService.getAllSortedProducts();
    console.log(JSON.stringify(sortedProducts, null, 2));
}

logProducts();
