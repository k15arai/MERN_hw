const ProductController = require('../controllers/product.controller');

module.exports = (app) => {
    // Create
    app.post('/api/products', ProductController.createProduct);

    // Read All
    app.get('/api/products', ProductController.getAllProducts);

    // Read One
    app.get('/api/products/:id', ProductController.getProduct);

    // Update
    app.put('/api/products/:id', ProductController.updateProduct);

    // Delete
    app.delete('/api/products/:id', ProductController.deleteProduct);
};