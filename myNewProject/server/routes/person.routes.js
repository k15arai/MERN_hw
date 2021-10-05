// controller file
const PersonController = require('../controllers/person.controller');

// export routes

module.exports = (app) => {
    // list express routes

    // Create
    app.post('/api/people', PersonController.createPerson);
    // Read All and One
    app.get('/api/people', PersonController.getAllPeople);
    app.get('/api/people/:id', PersonController.getPerson);
    // Update One Person
    app.put('/api/people/:id', PersonController.updatePerson);
    // Delete One Person
    app.delete('/api/people/:id', PersonController.deletePerson);
};