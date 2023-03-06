const products = [
    {
        title: 'Basic: 500MB Data - 12 Months',
        description: 'The basic starter subscription providing you with all you need to get your device up and running with inclusive Data and SMS services.',
        price: 5.99,
        discount: 0,
    },
    {
        title: 'Standard: 1GB Data - 12 Months',
        description: 'The standard subscription providing you with enough service time to support the average user to enable your device to be up and running with inclusive Data and SMS services.',
        price: 9.99,
        discount: 0,
    },
    {
        title: 'Optimum: 2 GB Data - 12 Months',
        description: 'The optimum subscription providing you with enough service time to support the above-average user to enable your device to be up and running with inclusive Data and SMS services',
        price: 15.99,
        discount: 0,
    }
];

class ProductModel  {
    // simulate data base call
    static async getAllProducts() {
        return Promise.resolve(products);
    }
};

module.exports = {
    ProductModel
};
