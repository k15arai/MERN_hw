const AuthorController = require('../controllers/author.controllers');


module.exports = (app) => {
    // Health Check
    app.get('/api', AuthorController.index);
    // Create
    app.post('/api/author', AuthorController.createAuthor);
    // Read All
    app.get('/api/author', AuthorController.findAllAuthors);
    // Read One
    app.get('/api/author/:id', AuthorController.findOneAuthor);
    // Update One
    app.put('/api/author/:id', AuthorController.updateOneAuthor);
    // Delete One
    app.delete('/api/author/:id', AuthorController.deleteOneAuthor);
};




