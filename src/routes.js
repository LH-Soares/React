const express = require('express');
const routes = express.Router();

const AnnotationsController = require('./controllers/AnnotationsController');
const PriorityController = require('./controllers/PriorityController');
const ContentController = require('./controllers/ContentController');

routes.post('/annotations', AnnotationsController.create);
routes.get('/annotations', AnnotationsController.read);
routes.delete('/annotations/:id', AnnotationsController.delete);



routes.get('/priorities', PriorityController.read)
routes.post('/priorities/:id', PriorityController.update)



routes.post('/contents/:id', ContentController.update)

module.exports = routes;