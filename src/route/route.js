const express = require('express');
const route = express.Router();

const userController = require('../controller/userController')
const eventController = require('../controller/eventController');
const middleware = require('../middleware/auth')

//For User related API's
route.post('/signup', userController.signUp);
route.post('/login',userController.login);

//For Event related API's
route.post('/event',middleware.auth,eventController.createEvent);
route.get('/schedules',middleware.auth, eventController.getSchedules);
route.delete('/delete',middleware.auth,eventController.deleteEvent);

module.exports = route;