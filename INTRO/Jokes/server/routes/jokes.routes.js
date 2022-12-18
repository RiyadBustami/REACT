const UserController = require('../controllers/jokes.controller')

module.exports = app => {
    app.get('/api/jokes', UserController.findAllJokes);
    app.get('/api/jokes/:id', UserController.findOneJoke);
    app.put('/api/jokes/:id', UserController.updateExistingJoke);
    app.post('/api/jokes', UserController.createNewJoke);
    app.delete('/api/jokes/:id', UserController.deleteAnExistingJoke);
}